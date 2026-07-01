export const formatDate = (timestamp: number) => {
    const result = new Date(timestamp).toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
    return result;
    };