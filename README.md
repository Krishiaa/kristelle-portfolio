# Kristelle Jan Mumar — Portfolio

A responsive single-page portfolio built with Next.js App Router, TypeScript, Tailwind CSS v4, and Framer Motion.

## Run locally
1. Install Node.js 20.9 or newer.
2. Open this folder in VS Code.
3. In the terminal, run:

```bash
npm install
npm run dev
```

4. Open http://localhost:3000.

To check a production build, run `npm run build` then `npm start`.

## Replace the photo
Replace `public/profile-placeholder.svg` with your own image (for example `profile.jpg`). Update the two `Image` components in `components/Hero.tsx` and `components/About.tsx` to use `src="/profile.jpg"` and adjust alt text. Keep the image in `public`.

## Add your resume
Put your PDF at `public/resume.pdf`. The hero button already links to `/resume.pdf`.

## Edit portfolio text
All editable portfolio text and lists are in `data/content.ts`.

## Activate the contact form
1. Create a form at https://formspree.io/.
2. Copy the form ID.
3. In `components/Contact.tsx`, replace `YOUR_FORM_ID` in the form action URL.
4. Submit a test message after deployment.

## Deploy to Vercel
1. Create a GitHub repository and push this project:

```bash
git init
git add .
git commit -m "Create portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

2. Sign in at https://vercel.com/ and choose **Add New → Project**.
3. Import your GitHub repository.
4. Keep the detected Next.js settings and click **Deploy**.
5. After deployment, open the provided URL and test the resume link and contact form.

No environment variables or additional Vercel configuration are required for the site itself. Formspree needs its own form ID to receive messages.
