import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Atelierul48")
    .items([
      S.listItem()
        .title("📦 Produse")
        .schemaType("product")
        .child(
          S.documentTypeList("product")
            .title("Produse")
            .defaultOrdering([{ field: "order", direction: "asc" }])
        ),
      S.divider(),
      S.listItem()
        .title("⚙️ Setări site")
        .id("siteSettings")
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
            .title("Setări site")
        ),
    ]);
