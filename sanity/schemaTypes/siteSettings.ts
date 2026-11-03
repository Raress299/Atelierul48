import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Setări site",
  type: "document",
  fields: [
    defineField({
      name: "brand",
      title: "Nume brand",
      type: "string",
      initialValue: "Atelierul48",
    }),
    defineField({
      name: "whatsappNumber",
      title: "Număr WhatsApp",
      type: "string",
      description: "Doar cifre, cu prefix țară. Ex: 40749313489",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroHeadline",
      title: "Titlu Hero",
      type: "string",
      initialValue: "Tocătoare din lemn masiv, lucrate manual.",
    }),
    defineField({
      name: "heroSubtext",
      title: "Text scurt Hero",
      type: "text",
      rows: 2,
      initialValue: "Piese unicat, finisaj food-safe și atenție la fiecare fibră.",
    }),
    defineField({
      name: "heroImage",
      title: "Imagine Hero (desktop)",
      type: "image",
      options: { hotspot: true },
      description: "Opțional. Dacă lipsește, se folosește produsul marcat Hero principal.",
    }),
    defineField({
      name: "heroImageMobile",
      title: "Imagine Hero (mobil)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "customTitle",
      title: "Titlu secțiune personalizat",
      type: "string",
      initialValue: "Tocător personalizat",
    }),
    defineField({
      name: "customDescription",
      title: "Descriere personalizat",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "email",
      title: "Email contact",
      type: "string",
      initialValue: "contact@atelierul48.ro",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Setări site" }),
  },
});
