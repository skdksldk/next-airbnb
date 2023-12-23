# next-aribnb

## 프로젝트 설명
aribnb는 이전에 제작했던  [next-amazon](https://github.com/skdksldk/next-amazon)과  [next-blog](https://github.com/skdksldk/nextblog)를 기반으로 prisma를 추가해서 만든 여행용 애플리케이션입니다
- prisma에 mongo db를 접속하여 CRUD를 통해 로그인, 로그아웃, 여행지 추가 및 삭제를 할수 있습니다
- nextjs를 통해 서버 사이드 렌더링을 공부하게 되었고 tailwind css를 지원할수 있게 되었음을 알게 되었습니다.
- next-auth 라이브러리를 통해 Oauth Google login 기능을 첨부해 구글을 통한 로그인을 할수 있습니다.
- next-cloudinary 라이브러리를 통해 cloudinay 기능으로 이미지 업로드를 할수 있습니다.
- [배포 링크](https://nextaribnb.vercel.app/)

### 🏃 구성원
- Frontend<br/>
  - 김준수(React)
  - 사용 기술 : `Next.js 13`, `React`, `TailwindCSS`, `next-cloudinary`, `next-auth`
- Backend<br/>
  - 사용 기술 : `Node.js`, `Express`, `MongoDB`, `Prisma`
 
## 🔎 기능 설명

### 1. 메인페이지

https://github.com/skdksldk/next-aribnb/assets/85090323/e078b85d-9177-45ba-a128-acf0a5dd480d


https://github.com/skdksldk/next-aribnb/assets/85090323/6e3a4f2b-592c-4118-844b-8fac216e40ee


### 2. 로그인

![로그인](https://github.com/skdksldk/next-aribnb/assets/85090323/a62a4036-6f51-4b5e-8915-63789351f808)

- Next-Auth로 구글 로그인 연동이 가능합니다.

### 3. 회원가입

![회원가입](https://github.com/skdksldk/next-aribnb/assets/85090323/573dfca4-ffde-4398-bbae-d6c5d1c1a84a)

### 4. 이미지 업로드

![1](https://github.com/skdksldk/next-aribnb/assets/85090323/444dea41-0fe6-43aa-b7b2-c7198eb6a9b7)

![2](https://github.com/skdksldk/next-aribnb/assets/85090323/994d8da8-8a72-4da1-a651-04684788b7ab)

![3](https://github.com/skdksldk/next-aribnb/assets/85090323/c997709c-a804-4920-964e-e159c43a8342)

- Next-Cloudinary로 이미지 업로드가 가능합니다.

### 5. 좋아요

![좋아요] ![좋아요](https://github.com/skdksldk/next-aribnb/assets/85090323/c0edad06-4620-4a50-9e92-4932a171661f)

### 6. 검색

![검색](https://github.com/skdksldk/next-aribnb/assets/85090323/d9f78264-f6b0-438f-b68c-09742965391c)

![2](https://github.com/skdksldk/next-aribnb/assets/85090323/30dddfa7-41fb-43c1-be2c-ba0eda3d32a5)

- 여행지 예약 및 시간과 장소 조회가 가능합니다.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
