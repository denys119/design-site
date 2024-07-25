import type { LayoutKey } from '#build/types/layouts';

export default defineNuxtRouteMiddleware(async to => {
  const CONFIG = useRuntimeConfig();

  const pageStore = usePageStore();

  const { setPageDetailsFromURL, loadPageMeta } = pageStore;

  setPageDetailsFromURL(to.fullPath);

  const { layout, seo, authenticated } = await loadPageMeta();
  if (layout) {
    to.meta.layout = layout as LayoutKey || 'default';
  }

  if (authenticated) {
    pageStore.requireAuth = authenticated;
  }

  if (seo) {
    pageStore.metaInfo = {
      title: seo.metaTitle,
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          name: 'author',
          content: 'root'
        },
        ...getMetaInfo(seo, CONFIG.public.strapi.url)
      ]
    };
  }

  useHead(pageStore.metaInfo);
});
