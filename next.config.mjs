/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    // Compression pour réduire la taille des fichiers transférés
    compress: true,
    // Optimisations pour le chargement rapide
    images: {
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 60 * 60 * 24 * 30, // 30 jours de cache
        deviceSizes: [320, 420, 768, 1024, 1200],
        imageSizes: [16, 32, 48, 64, 96, 128],
    },
    // Optimisations expérimentales
    experimental: {
        // Optimise les imports de packages volumineux
        optimizePackageImports: ['lucide-react', 'react-markdown', 'recharts'],
    },
    // Prefetching désactivé pour économiser la bande passante
    // Activer uniquement les prefetch critiques
};

export default nextConfig;
