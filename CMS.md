# Cum editezi produsele și pozele (Sanity CMS)

Site-ul poate citi catalogul din **Sanity**. Dacă CMS-ul nu e configurat, rămân produsele din cod (fallback).

## 1. Creează proiectul Sanity

1. Intră pe [https://www.sanity.io/get-started](https://www.sanity.io/get-started) și creează un proiect (ex. `Atelierul48`).
2. Copiază **Project ID**.
3. Dataset: lasă `production`.

## 2. Adaugă variabilele în proiect

Creează fișierul `.env.local` (local) și aceleași variabile în **Vercel → Settings → Environment Variables**:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxx
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
```

## 3. Deschide panoul de editare

1. Pornește site-ul: `npm run dev`
2. Deschide: [http://localhost:3000/studio](http://localhost:3000/studio)
3. Autentifică-te cu contul Sanity.

Pe producție: `https://domeniul-tau.vercel.app/studio`

## 4. Ce poți edita

### Produs
- Nume, descriere, lemn, finisaj, preț
- Poză (cu hotspot pentru încadrare)
- **Hero principal** — bifează produsul care apare pe prima pagină
- **Vizibil pe site** — debifează ca să-l scoți din catalog
- **Ordine în catalog** — 0, 1, 2…

### Setări site
- Număr WhatsApp
- Texte Hero
- Poze Hero separate (opțional)
- Titlu / text „Tocător personalizat”
- Email

## 5. Invită clientul

În Sanity Manage → proiect → **Members** → invită emailul lui cu rol de **Editor**.  
El editează din `/studio`, fără să atingă codul.

## Notă

După publish în Studio, site-ul se actualizează în maxim ~60 secunde (`revalidate`).
