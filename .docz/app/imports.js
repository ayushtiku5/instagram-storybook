export const imports = {
  'Form.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "form" */ 'Form.mdx'),
  'Image.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "image" */ 'Image.mdx'),
  'InputField.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "input-field" */ 'InputField.mdx'
    ),
  'button.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "button" */ 'button.mdx'
    ),
}
