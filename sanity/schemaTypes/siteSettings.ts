import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Setări site",
  type: "document",
  fields: [
    defineField({
      name: "whatsappNumber",
      title: "Număr WhatsApp",
      type: "string",
      description: "Doar cifre, cu prefix. Ex: 40749313489",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "brand",
      title: "Nume brand",
      type: "string",
      initialValue: "Atelierul48",
    }),
    defineField({
      name: "heroHeadline",
      title: "Titlu mare (sub brand)",
      type: "string",
      initialValue: "Tocătoare din lemn masiv, lucrate manual.",
    }),
    defineField({
      name: "heroSubtext",
      title: "Text scurt sub titlu",
      type: "text",
      rows: 2,
      initialValue: "Piese unicat, finisaj food-safe și atenție la fiecare fibră.",
    }),
    defineField({
      name: "customTitle",
      title: "Titlu „Tocător personalizat”",
      type: "string",
      initialValue: "Tocător personalizat",
    }),
    defineField({
      name: "customDescription",
      title: "Text „Tocător personalizat”",
      type: "text",
      rows: 3,
      initialValue:
        "Alegi esența, dimensiunea, forma și detaliile — mâner, șanț, gravură sau finisaj. Lucrăm piesa pe baza ideii tale.",
    }),
    defineField({
      name: "email",
      title: "Email contact",
      type: "string",
      initialValue: "contact@atelierul48.ro",
    }),
    defineField({
      name: "heroImage",
      title: "Imagine Hero desktop (opțional)",
      type: "image",
      options: { hotspot: true },
      description:
        "Lasă gol dacă folosești bifa „Imagine pe prima pagină” de la un produs.",
      hidden: ({ document }) => true,
    }),
    defineField({
      name: "heroImageMobile",
      title: "Imagine Hero mobil (opțional)",
      type: "image",
      options: { hotspot: true },
      hidden: ({ document }) => true,
    }),
  ],
  preview: {
    prepare: () => ({ title: "Setări site" }),
  },
});
