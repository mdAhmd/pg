# Govt. PG College of Excellence, Seoni: Website

A fast, mobile-friendly college website. Plain HTML, CSS and a little JavaScript. No frameworks, no server, no database.

**Pages:** Home (with Director's message) · About · Courses · Departments (Arts, Commerce, Science) · Professors · Admission (form → WhatsApp) · Exam · Result · Photo Gallery · Contact Us

---

## 1. Put it online (free link, no domain needed)

1. Create a **Public** repository on <https://github.com/new>.
2. Click **uploading an existing file**. Unzip this project, open the folder, press **Ctrl + A**, and drag **everything inside it** into GitHub. The `assets` folder must be included. Click **Commit changes**.
3. Go to **Settings → Pages**, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
4. After about 2 minutes your site is at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

`index.html` and the `assets` folder must sit side by side at the top level of the repository.

To update later: open a file on GitHub → pencil icon → edit → **Commit changes**.

## 2. Replace the pictures with your own

All pictures are `.jpg` files. Upload your photo **with exactly the same file name** and it replaces the old one:

| File | Where it shows | Best size |
|---|---|---|
| `assets/img/hero.jpg` | Home page banner and the top of every page | 1600 × 900 px |
| `assets/img/gallery/main-building.jpg` | Gallery + Home | 800 × 600 px |
| `assets/img/gallery/library.jpg` | Gallery + Home | 800 × 600 px |
| `assets/img/gallery/science-lab.jpg` | Gallery | 800 × 600 px |
| `assets/img/gallery/computer-lab.jpg` | Gallery | 800 × 600 px |
| `assets/img/gallery/sports-day.jpg` | Gallery | 800 × 600 px |
| `assets/img/gallery/annual-function.jpg` | Gallery | 800 × 600 px |
| `assets/img/gallery/nss-camp.jpg` | Gallery | 800 × 600 px |
| `assets/img/gallery/convocation.jpg` | Gallery + Home | 800 × 600 px |
| `assets/img/gallery/garden.jpg` | Gallery | 800 × 600 px |

Keep each photo under about 300 KB (the hero under 500 KB) so the site stays fast. Free tools like squoosh.app can shrink photos. On the hero, keep the main subject in the middle: the sides are cropped on phones. The tab icon is `assets/img/favicon.svg`.

## 3. Settings: `assets/js/config.js`

```js
whatsappNumber: "917869231186",   // receives admission forms and enquiries
admitCardUrl:   "https://...",    // official admit-card page
resultUrl:      "https://...",    // official result page
```

When a student submits a form, WhatsApp opens with all the details filled in and the student presses **Send**. The website itself stores nothing. While `admitCardUrl` / `resultUrl` are empty, those buttons show "Link will be updated soon".

## 4. Change the text

Most text lives in `_build/data.js` (college details, director, professors, courses, departments, exam table, notices, FAQs). After editing it, regenerate the pages (needs [Node.js](https://nodejs.org)):

```bash
node _build/build.js     # rebuilds all .html pages
node _build/check.js     # checks links, images and structure
```

Without Node.js you can edit the `.html` files directly in any text editor.

## 5. Layout

```
index.html, about.html, courses.html, ...   the pages
assets/css/style.css                        all styling
assets/js/config.js                         settings
assets/js/main.js, forms.js, gallery.js     small scripts
assets/img/                                 JPG pictures + favicon
_build/                                     page generator + content (optional)
```
