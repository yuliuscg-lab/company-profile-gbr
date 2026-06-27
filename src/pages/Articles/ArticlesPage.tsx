import { useRef, useState } from 'react'
import {
  Box, Typography, Button, Card, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, IconButton, Chip, Dialog, DialogTitle, DialogContent,
  DialogActions, TextField, MenuItem, Snackbar, Alert,
} from '@mui/material'
import { AddOutlined, DeleteOutlineOutlined, EditOutlined } from '@mui/icons-material';
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

const editorExtensions = [
  StarterKit, // sudah termasuk: paragraph, heading, bold, italic, strike, bulletList, orderedList, blockquote, codeBlock, horizontalRule, history (undo/redo)
  Underline, // bold/italic/strike dari StarterKit, underline harus ditambah manual
  Link.configure({ openOnClick: false }), // supaya link tidak langsung ke-trigger saat sedang diedit
  Image, // untuk sisipkan gambar di tengah artikel
  TextAlign.configure({ types: ['heading', 'paragraph'] }), // rata kiri/tengah/kanan
  Placeholder.configure({ placeholder: 'Tulis isi artikel di sini...' }),
]

type Article = {
  id: string
  title: string
  category: string
  status: 'Draft' | 'Published'
  date: string
}

// Data dummy awal — ganti dengan fetch dari API artikel Anda
const initialArticles: Article[] = [
  { id: '1', title: 'Tips Menulis Artikel SEO', category: 'Tips', status: 'Published', date: '24 Jun 2026' },
  { id: '2', title: 'Panduan Onboarding Tim Baru', category: 'Internal', status: 'Draft', date: '22 Jun 2026' },
  { id: '3', title: 'Update Fitur CMS Bulan Ini', category: 'Produk', status: 'Published', date: '18 Jun 2026' },
]

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>(initialArticles)
  const [openForm, setOpenForm] = useState(false)
  const [deleteTarget, setDeleteTarget] = useState<Article | null>(null)
  const [snackbar, setSnackbar] = useState<string | null>(null)

  const formik = useFormik({
    initialValues: { title: '', category: '', status: 'Draft', content: '' },
    validationSchema: Yup.object({
      title: Yup.string().min(5, 'Judul minimal 5 karakter').required('Judul wajib diisi'),
      category: Yup.string().required('Kategori wajib diisi'),
      status: Yup.string().required(),
      content: Yup.string().min(20, 'Konten minimal 20 karakter').required('Konten wajib diisi'),
    }),
    onSubmit: (values, { resetForm }) => {
      // TODO: ganti dengan POST ke API artikel Anda
      const newArticle: Article = {
        id: Date.now().toString(),
        title: values.title,
        category: values.category,
        status: values.status as Article['status'],
        date: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }),
      }
      setArticles((prev) => [newArticle, ...prev])
      resetForm()
      setOpenForm(false)
      setSnackbar('Artikel berhasil ditambahkan')
    },
  })

  const handleDelete = () => {
    if (!deleteTarget) return
    setArticles((prev) => prev.filter((a) => a.id !== deleteTarget.id))
    setSnackbar('Artikel berhasil dihapus')
    setDeleteTarget(null)
  }

  const rteRef = useRef<RichTextEditorRef>(null);

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography sx={{ fontSize: 14, color: '#6B7280' }}>
          {articles.length} artikel total
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddOutlined />}
          onClick={() => setOpenForm(true)}
          sx={{ bgcolor: 'secondary.main', '&:hover': { bgcolor: '#185FA5' }, py: 1, px: 2.5, color:'white' }}
        >
          Tambah Artikel
        </Button>
      </Box>

      <Card sx={{ borderRadius: 3, boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: '#F9FAFB' }}>
                <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: 12.5 }}>JUDUL</TableCell>
                <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: 12.5 }}>KATEGORI</TableCell>
                <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: 12.5 }}>STATUS</TableCell>
                <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: 12.5 }}>TANGGAL</TableCell>
                <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: 12.5 }} align="right">AKSI</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {articles.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} align="center" sx={{ py: 5, color: '#9CA3AF' }}>
                    Belum ada artikel. Klik "Tambah Artikel" untuk membuat yang pertama.
                  </TableCell>
                </TableRow>
              )}
              {articles.map((a) => (
                <TableRow key={a.id} hover>
                  <TableCell sx={{ fontSize: 14, fontWeight: 500, color: '#1F2937' }}>{a.title}</TableCell>
                  <TableCell sx={{ fontSize: 14, color: '#6B7280' }}>{a.category}</TableCell>
                  <TableCell>
                    <Chip
                      label={a.status}
                      size="small"
                      sx={{
                        bgcolor: a.status === 'Published' ? '#DCFCE7' : '#FEF3C7',
                        color: a.status === 'Published' ? '#16A34A' : '#B45309',
                        fontWeight: 500, fontSize: 12,
                      }}
                    />
                  </TableCell>
                  <TableCell sx={{ fontSize: 14, color: '#6B7280' }}>{a.date}</TableCell>
                  <TableCell align="right">
                    <IconButton size="small" sx={{ color: '#9CA3AF' }}>
                      <EditOutlined fontSize="small" />
                    </IconButton>
                    <IconButton size="small" sx={{ color: '#DC2626' }} onClick={() => setDeleteTarget(a)}>
                      <DeleteOutlineOutlined fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      {/* Tambah artikel */}
      <Dialog open={openForm} onClose={() => setOpenForm(false)} fullWidth maxWidth="md">
        <form onSubmit={formik.handleSubmit}>
          <DialogTitle sx={{ fontWeight: 600 }}>Tambah Artikel</DialogTitle>
          <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, pt: 1 }}>
            <TextField
              fullWidth label="Judul" name="title"
              value={formik.values.title} onChange={formik.handleChange} onBlur={formik.handleBlur}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />
            <TextField
              fullWidth select label="Kategori" name="category"
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
              value={formik.values.status} onChange={formik.handleChange}
            >
              <MenuItem value="Draft">Draft</MenuItem>
              <MenuItem value="Published">Published</MenuItem>
            </TextField>

            <RichTextEditor
              ref={rteRef}
              extensions={editorExtensions}
              content="<p></p>"
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
                  {/* Link & gambar — penting untuk artikel blog */}
                  <MenuButtonEditLink />
                  <MenuButtonImageUpload
                    onUploadFiles={(files) =>
                      // TODO: ganti dengan upload ke storage/CDN Anda, lalu kembalikan URL-nya
                      files.map((file) => ({
                        src: URL.createObjectURL(file),
                        alt: file.name,
                      }))
                    }
                  />
                  <MenuDivider />

                  {/* Perataan teks */}
                  <MenuButtonAlignLeft />
                  <MenuButtonAlignCenter />
                  <MenuButtonAlignRight />
                  <MenuDivider />

                  {/* Undo / redo */}
                  <MenuButtonUndo />
                  <MenuButtonRedo />
                </MenuControlsContainer>
              )}
            />
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 2.5 }}>
            <Button onClick={() => setOpenForm(false)} sx={{ color: '#6B7280' }}>Batal</Button>
            <Button
              type="submit" variant="contained"
              sx={{ bgcolor: 'secondary.main', '&:hover': { bgcolor: '#185FA5' }, color:'white' }}
            >
              Simpan
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      {/*Konfirmasi Hapus */}
      <Dialog open={Boolean(deleteTarget)} onClose={() => setDeleteTarget(null)} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ fontWeight: 600 }}>Hapus Artikel?</DialogTitle>
        <DialogContent>
          <Typography sx={{ fontSize: 14, color: '#6B7280' }}>
            Artikel "{deleteTarget?.title}" akan dihapus permanen dan tidak dapat dikembalikan.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2.5 }}>
          <Button onClick={() => setDeleteTarget(null)} sx={{ color: '#6B7280' }}>Batal</Button>
          <Button variant="contained" color="error" onClick={handleDelete}>Hapus</Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={Boolean(snackbar)} autoHideDuration={2500} onClose={() => setSnackbar(null)}>
        <Alert severity="success" onClose={() => setSnackbar(null)}>{snackbar}</Alert>
      </Snackbar>
    </Box>
  )
}
