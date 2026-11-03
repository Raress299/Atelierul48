export const PRODUCTS_QUERY = `*[_type == "product" && active != false] | order(order asc, name asc) {
  _id,
  name,
  "slug": slug.current,
  description,
  wood,
  finish,
  detail,
  price,
  alt,
  featured,
  order,
  image,
  "imageUrl": image.asset->url,
  "hotspot": image.hotspot
}`;

export const FEATURED_PRODUCT_QUERY = `*[_type == "product" && featured == true && active != false][0] {
  _id,
  name,
  alt,
  image,
  "imageUrl": image.asset->url,
  "hotspot": image.hotspot
}`;

export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0] {
  brand,
  whatsappNumber,
  heroHeadline,
  heroSubtext,
  heroImage,
  "heroImageUrl": heroImage.asset->url,
  heroImageMobile,
  "heroImageMobileUrl": heroImageMobile.asset->url,
  customTitle,
  customDescription,
  email
}`;
