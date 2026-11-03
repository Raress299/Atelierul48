import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Produs",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nume produs",
      type: "string",
      description: "Ex: Frunză, Arcă, Scoarță",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Poză",
      type: "image",
      options: { hotspot: true },
      description: "Încarcă poza. Poți muta punctul central pentru încadrare.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descriere",
      type: "text",
      rows: 4,
      description: "2–3 propoziții. Apare pe cardul din catalog.",
      validation: (rule) => rule.required().max(450),
    }),
    defineField({
      name: "price",
      title: "Preț",
      type: "string",
      description: "Ex: 289 lei sau La cerere",
      initialValue: "La cerere",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "wood",
      title: "Tip lemn",
      type: "string",
      initialValue: "Lemn masiv",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "finish",
      title: "Finisaj",
      type: "string",
      initialValue: "Ulei mineral food-safe",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "detail",
      title: "Detaliu scurt",
      type: "string",
      description: "Ex: Formă frunză, Set 2 piese",
      initialValue: "Piesă unicat",
    }),
    defineField({
      name: "featured",
      title: "Imagine pe prima pagină (Hero)",
      type: "boolean",
      description: "Bifează UN singur produs — acesta apare mare sus pe site.",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Ordine în catalog",
      type: "number",
      description: "0 = primul, 1 = al doilea, etc.",
      initialValue: 0,
    }),
    defineField({
      name: "active",
      title: "Vizibil pe site",
      type: "boolean",
      description: "Debifează ca să-l ascunzi fără să-l ștergi.",
      initialValue: true,
    }),
    defineField({
      name: "alt",
      title: "Descriere scurtă poză (opțional)",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug (automat)",
      type: "slug",
      options: { source: "name", maxLength: 64 },
      hidden: true,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "price",
      media: "image",
      active: "active",
      featured: "featured",
    },
    prepare({ title, subtitle, media, active, featured }) {
      const flags = [
        featured ? "⭐ Hero" : null,
        active === false ? "Ascuns" : null,
      ]
        .filter(Boolean)
        .join(" · ");
      return {
        title: title || "Fără nume",
        subtitle: [subtitle, flags].filter(Boolean).join(" · "),
        media,
      };
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
