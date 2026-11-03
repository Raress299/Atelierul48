import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Produs",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nume",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 64 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descriere",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required().max(450),
    }),
    defineField({
      name: "wood",
      title: "Lemn",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "finish",
      title: "Finisaj",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "detail",
      title: "Detaliu scurt",
      type: "string",
      description: "Ex: Formă frunză, Set 2 piese",
    }),
    defineField({
      name: "price",
      title: "Preț",
      type: "string",
      initialValue: "La cerere",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Poză produs",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "alt",
      title: "Text alternativ poză",
      type: "string",
    }),
    defineField({
      name: "featured",
      title: "Hero principal",
      type: "boolean",
      description: "Dacă e bifat, apare ca imagine principală pe prima pagină.",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Ordine în catalog",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "active",
      title: "Vizibil pe site",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "price",
      media: "image",
    },
  },
  orderings: [
    {
      title: "Ordine catalog",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
