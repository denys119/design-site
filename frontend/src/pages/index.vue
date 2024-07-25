<template>
  <div>
    <h-page :page="page" />
    <nuxt-link to="/">
      Page 1
    </nuxt-link>
    <nuxt-link to="/page2">
      Page 2
    </nuxt-link>
  </div>
</template>

<script setup lang='ts'>
const pageStore = usePageStore();
const pageContentStore = usePageContentStore();
const menuStore = useMenuStore();

const { page, slug, type } = storeToRefs(pageStore);

await useAsyncData('page', () => pageStore.loadPage());

await useAsyncData(
  'pageContent',
  async () => pageContentStore.loadPageContent({
    slug: slug.value,
    type: type.value,
    fragments: getFragments(page.value.attributes?.body ?? [], await import('@/graphql/fragments')),
    locale: 'en'
  })
);

await useAsyncData('menu', () => menuStore.loadMenu('main-navigation', ['All']));

if (!page.value) throw createError({ statusCode: 404, statusMessage: 'NOT FOUND', message: 'Page not found', fatal: true });
</script>
