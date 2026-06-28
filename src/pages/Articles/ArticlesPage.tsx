import { useCallback, useRef, useState } from 'react'
import {
  Box, Typography, Button, Card, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, IconButton, Chip, Dialog, DialogTitle, DialogContent,
  DialogActions, TextField, MenuItem, Snackbar, Alert, CircularProgress
} from '@mui/material'
import { AddOutlined, ArticleOutlined, DeleteOutlineOutlined, EditOutlined } from '@mui/icons-material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  MenuButtonAlignCenter,
  MenuButtonAlignLeft,
  MenuButtonAlignRight,
  MenuButtonBlockquote,
  MenuButtonBold,
  MenuButtonBulletedList,
  MenuButtonCodeBlock,
  MenuButtonEditLink,
  MenuButtonHorizontalRule,
  MenuButtonImageUpload,
  MenuButtonItalic,
  MenuButtonOrderedList,
  MenuButtonRedo,
  MenuButtonStrikethrough,
  MenuButtonUnderline,
  MenuButtonUndo,
  MenuControlsContainer,
  MenuDivider,
  MenuSelectHeading,
  RichTextEditor,
  type RichTextEditorRef
} from "mui-tiptap";
import StarterKit from "@tiptap/starter-kit";
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import TextAlign from '@tiptap/extension-text-align'
import Placeholder from '@tiptap/extension-placeholder'
import backendlessApi from '../../config/axios.config';
import { useAuth } from '../../context/AuthContext';
import useFetch from '../../hooks/useFetch';

const editorExtensions = [
  StarterKit,
  Underline,
  Link.configure({ openOnClick: false }),
  Image,
  TextAlign.configure({ types: ['heading', 'paragraph'] }),
  Placeholder.configure({ placeholder: 'Tulis isi artikel di sini...' }),
]

type Article = {
  objectId: string;
  title: string
  category: string
  article_status: 'Draft' | 'Published'
  content: string
  created: number
}

export default function ArticlesPage() {
  const [openForm, setOpenForm] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<Article | null>(null);
  const [snackbar, setSnackbar] = useState<{ message: string; severity: 'success' | 'error' } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editTarget, setEditTarget] = useState<Article|null>(null);

  const {user} = useAuth();
  const rteRef = useRef<RichTextEditorRef>(null);

  // 1. Integrasi useFetch langsung untuk entitas /Articles
  const {
    data: articles,
    isLoading,
    error,
    refetch: reloadArticles,
  } = useFetch<Article[]>(
    "/Articles",
    {
      params: {
        where: `ownerId='${user?.objectId}'`,
        sortBy: "created desc",
      },
    },
    backendlessApi,
  );

  // 2. Formik Setup dengan penanganan ekstrak konten dari Rich Text Editor
  const formik = useFormik({
    initialValues: { title: '', category: '', article_status: 'Draft', content: '' },
    validationSchema: Yup.object({
      title: Yup.string().min(5, 'Judul minimal 5 karakter').required('Judul wajib diisi'),
      category: Yup.string().required('Kategori wajib diisi'),
      article_status: Yup.string().required(),
      content: Yup.string().min(20, 'Konten minimal 20 karakter').required('Konten wajib diisi'),
    }),

    onSubmit: async (values) => {
      try {
        setIsSubmitting(true);
        if (editTarget) {
          await backendlessApi.put(`/Articles/${editTarget.objectId}`, {
            title: values.title,
            category: values.category,
            status: values.article_status,
            content: values.content,
          });
          setSnackbar({ message: 'Artikel berhasil diperbarui', severity: 'success' });
        } else {
          await backendlessApi.post('/Articles', {
            title: values.title,
            category: values.category,
            status: values.article_status,
            content: values.content,
            ownerId: user?.objectId,
          });
          setSnackbar({ message: 'Artikel berhasil ditambahkan', severity: 'success' });
        };
        reloadArticles();
        handleCloseForm();
        } catch (err) {
          console.error("Detail error:", err);
          setSnackbar({ message: 'Proses gagal dilakukan', severity: 'error' });
        } finally {
          setIsSubmitting(false);
        }
      },
  });

  const handleCloseForm = () => {
    setOpenForm(false);
    setEditTarget(null); 
    formik.resetForm();
    rteRef.current?.editor?.commands.setContent('<p></p>');
  };

  const handleEditorUpdate = useCallback(() => {
    const htmlContent = rteRef.current?.editor?.getHTML() || '';
    const cleanHtml = htmlContent === '<p></p>' ? '' : htmlContent;
    formik.setFieldValue('content', cleanHtml);
    formik.setFieldTouched('content', true, false);
  }, [formik]);

  const handleEditClick = (article: Article) => {
  setEditTarget(article);
  formik.setValues({
    title: article.title,
    category: article.category,
    article_status: article.article_status,
    content: article.content,
  });
  rteRef.current?.editor?.commands.setContent(article.content || '<p></p>');
  setOpenForm(true);
};

  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      await backendlessApi.delete(`/Articles/${deleteTarget.objectId}`);
      setSnackbar({ message: 'Artikel berhasil dihapus', severity: 'success' });
      setDeleteTarget(null);
      reloadArticles();
    } catch (err) {
      console.error('Detail error: ', err)
      setSnackbar({ message: 'Gagal menghapus artikel', severity: 'error' });
    }
  };


  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Card sx={{ p: 2.5, borderRadius: 3, boxShadow: '0 1px 3px rgba(0,0,0,0.06)', display:'flex', gap:2, alignItems:'center'}}>
              
              <Box
                sx={{
                  width: 44, height: 44, borderRadius: 2,
                  bgcolor: `#185FA51A`, color: "#185FA5",
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <ArticleOutlined/>
              </Box>
              <Typography sx={{ fontSize: 24, fontWeight: 700, color: '#1F2937' }}>
                  {articles ? articles.length : 0}
                </Typography>
                <Typography sx={{ fontSize: 13, color: '#6B7280' }}>Total Artikel</Typography>
            </Card>
        <Button
          variant="contained"
          startIcon={<AddOutlined />}
          onClick={() => setOpenForm(true)}
          sx={{ bgcolor: 'secondary.main', '&:hover': { bgcolor: '#185FA5' }, py: 1, px: 2.5, color: 'white' }}
        >
          Tambah Artikel
        </Button>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }} onClose={reloadArticles}>
          Gagal mengambil data dari server. Klik icon refresh atau coba lagi.
        </Alert>
      )}

      <Card sx={{ borderRadius: 3, boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: '#F9FAFB' }}>
                <TableCell sx={{ fontWeight: 700, color: '#6B7280', fontSize: 12.5 }}>NO</TableCell>
                <TableCell sx={{ fontWeight: 700, color: '#6B7280', fontSize: 12.5 }}>JUDUL</TableCell>
                <TableCell sx={{ fontWeight: 700, color: '#6B7280', fontSize: 12.5 }}>KATEGORI</TableCell>
                <TableCell sx={{ fontWeight: 700, color: '#6B7280', fontSize: 12.5 }}>STATUS</TableCell>
                <TableCell sx={{ fontWeight: 700, color: '#6B7280', fontSize: 12.5 }}>TANGGAL</TableCell>
                <TableCell sx={{ fontWeight: 700, color: '#6B7280', fontSize: 12.5 }} align="right">AKSI</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={6} align="center" sx={{ py: 5 }}>
                    <CircularProgress size={30} />
                  </TableCell>
                </TableRow>
              ) : !articles || articles.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} align="center" sx={{ py: 5, color: '#9CA3AF' }}>
                    Belum ada artikel. Klik "Tambah Artikel" untuk membuat yang pertama.
                  </TableCell>
                </TableRow>
              ) : (
                articles.map((a,i) => (
                  <TableRow key={a.objectId} hover>
                    <TableCell sx={{ fontSize: 14, fontWeight: 500, color: '#1F2937' }}>
                      {i+1}
                    </TableCell>
                    <TableCell sx={{ fontSize: 14, fontWeight: 500, color: '#1F2937' }}>{a.title}</TableCell>
                    <TableCell sx={{ fontSize: 14, color: '#6B7280' }}>{a.category}</TableCell>
                    <TableCell>
                      <Chip
                        label={a.article_status}
                        size="small"
                        sx={{
                          bgcolor: a.article_status === 'Published' ? '#DCFCE7' : '#FEF3C7',
                          color: a.article_status === 'Published' ? '#16A34A' : '#B45309',
                          fontWeight: 500, fontSize: 12,
                        }}
                      />
                    </TableCell>
                    <TableCell sx={{ fontSize: 14, color: '#6B7280' }}>{formatDate(a.created)}</TableCell>
                    <TableCell align="right">
                      <IconButton size="small" sx={{ color: '#9CA3AF' }} onClick={()=>handleEditClick(a)}>
                        <EditOutlined fontSize="small" />
                      </IconButton>
                      <IconButton size="small" sx={{ color: '#DC2626' }} onClick={() => setDeleteTarget(a)}>
                        <DeleteOutlineOutlined fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      {/* Dialog Form Tambah Artikel */}
      <Dialog open={openForm} onClose={() => !isSubmitting && handleCloseForm()} fullWidth maxWidth="md">
        <form onSubmit={formik.handleSubmit}>
          <DialogTitle sx={{ fontWeight: 600 }}>{editTarget ? 'Edit Artikel' : 'Tambah Artikel'}</DialogTitle>
          <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, pt: 1 }}>
            <TextField
              fullWidth label="Judul" name="title"
              disabled={isSubmitting}
              value={formik.values.title} onChange={formik.handleChange} onBlur={formik.handleBlur}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />
            <TextField
              fullWidth select label="Kategori" name="category"
              disabled={isSubmitting}
              value={formik.values.category} onChange={formik.handleChange} onBlur={formik.handleBlur}
              error={formik.touched.category && Boolean(formik.errors.category)}
              helperText={formik.touched.category && formik.errors.category}
            >
              <MenuItem value="Tips">Tips</MenuItem>
              <MenuItem value="Internal">Internal</MenuItem>
              <MenuItem value="Produk">Produk</MenuItem>
              <MenuItem value="Berita">Berita</MenuItem>
            </TextField>
            <TextField
              fullWidth select label="Status" name="status"
              disabled={isSubmitting}
              value={formik.values.article_status} onChange={formik.handleChange}
            >
              <MenuItem value="Draft">Draft</MenuItem>
              <MenuItem value="Published">Published</MenuItem>
            </TextField>

            {/*Rich Text Editor */}
            <Box>
              <RichTextEditor
                ref={rteRef}
                extensions={editorExtensions}
                content={formik.values.content || "<p></p>"}
                onUpdate={handleEditorUpdate}
                renderControls={() => (
                  <MenuControlsContainer>
                    <MenuSelectHeading />
                    <MenuDivider />
                    <MenuButtonBold />
                    <MenuButtonItalic />
                    <MenuButtonUnderline />
                    <MenuButtonStrikethrough />
                    <MenuDivider />
                    <MenuButtonBulletedList />
                    <MenuButtonOrderedList />
                    <MenuButtonBlockquote />
                    <MenuButtonCodeBlock />
                    <MenuButtonHorizontalRule />
                    <MenuDivider />
                    <MenuButtonEditLink />
                    <MenuButtonImageUpload
                      onUploadFiles={(files) =>
                        files.map((file) => ({
                          src: URL.createObjectURL(file),
                          alt: file.name,
                        }))
                      }
                    />
                    <MenuDivider />
                    <MenuButtonAlignLeft />
                    <MenuButtonAlignCenter />
                    <MenuButtonAlignRight />
                    <MenuDivider />
                    <MenuButtonUndo />
                    <MenuButtonRedo />
                  </MenuControlsContainer>
                )}
              />
              {formik.touched.content && formik.errors.content && (
                <Typography color="error" variant="caption" sx={{ ml: 2, mt: 0.5, display: 'block' }}>
                  {formik.errors.content}
                </Typography>
              )}
            </Box>
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 2.5 }}>
            <Button onClick={handleCloseForm} disabled={isSubmitting}>Batal</Button>
            <Button
              type="submit" variant="contained"
              disabled={isSubmitting}
              sx={{ bgcolor: 'secondary.main', '&:hover': { bgcolor: '#185FA5' }, color: 'white' }}
            >
              {isSubmitting ? 'Menyimpan...' : editTarget ? 'Perbarui' : 'Simpan'}
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      {/* Konfirmasi Hapus */}
      <Dialog open={Boolean(deleteTarget)} onClose={() => setDeleteTarget(null)} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ fontWeight: 600 }}>Hapus Artikel?</DialogTitle>
        <DialogContent>
          <Typography sx={{ fontSize: 14, color: '#6B7280' }}>
            Artikel "{deleteTarget?.title}" akan dihapus permanen dari server Backendless.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2.5 }}>
          <Button onClick={() => setDeleteTarget(null)} sx={{ color: '#6B7280' }}>Batal</Button>
          <Button variant="contained" color="error" onClick={handleDelete}>Hapus</Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={Boolean(snackbar)} autoHideDuration={2500} onClose={() => setSnackbar(null)}>
        <Alert severity={snackbar?.severity || 'success'} onClose={() => setSnackbar(null)}>
          {snackbar?.message}
        </Alert>
      </Snackbar>
    </Box>
  )
}