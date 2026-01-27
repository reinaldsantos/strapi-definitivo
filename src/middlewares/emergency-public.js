// middleware/emergency-public.js
// Permite acesso público mesmo sem permissões configuradas

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    const publicRoutes = [
      { path: '/api/noticias', methods: ['GET'] },
      { path: '/api/noticias/:id', methods: ['GET'] },
      { path: '/api/eventos', methods: ['GET'] },
      { path: '/api/eventos/:id', methods: ['GET'] },
      { path: '/api/cursos', methods: ['GET'] },
      { path: '/api/cursos/:id', methods: ['GET'] }
    ];
    
    const currentPath = ctx.request.path;
    const currentMethod = ctx.request.method;
    
    // Verificar se é uma rota pública
    const isPublicRoute = publicRoutes.some(route => {
      if (route.path.includes(':id')) {
        const basePath = route.path.split('/:id')[0];
        return currentPath.startsWith(basePath) && 
               route.methods.includes(currentMethod);
      }
      return currentPath === route.path && 
             route.methods.includes(currentMethod);
    });
    
    if (isPublicRoute) {
      // Log apenas em desenvolvimento
      if (process.env.NODE_ENV !== 'production') {
        console.log(`🔓 MIDDLEWARE: Acesso público permitido para ${currentPath}`);
      }
      
      // Pular verificação de autenticação
      return await next();
    }
    
    // Para outras rotas, seguir fluxo normal
    await next();
  };
};
