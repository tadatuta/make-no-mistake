# Шаг 7: Маркетинг и Деплой
**Роли**: Marketer, CEO
**Проект**: RepurposeAI

## 1. Деплой на Vercel (CEO)

Проект полностью готов к деплою на Vercel. 
Поскольку это Vite (React) Single Page Application, не требующее серверных функций (вся логика работы с LLM происходит на клиенте благодаря BYOK формату), деплой предельно прост.

### Инструкция по деплою:
1. Запушить весь код из папки `repurpose-ai` в новый репозиторий на GitHub.
2. Авторизоваться в Vercel через GitHub.
3. Нажать **"Add New Project"** и импортировать созданный репозиторий.
4. В разделе **Framework Preset** убедиться, что выбран `Vite`.
5. В разделе **Root Directory** указать `repurpose-ai` (если репозиторий включает папку `/process/`). Если репозиторий создан прямо в папке `/repurpose-ai/`, то указать `./`.
6. Нажать **Deploy**.

Vercel автоматически выполнит `npm install` и `npm run build`, после чего приложение будет доступно по публичному URL (например, `repurpose-ai.vercel.app`).

## 2. Product Hunt Launch (Marketer)

Мы запускаем продукт бесплатно, делая акцент на экономию для криэйторов.

### Основная информация
* **Name**: RepurposeAI
* **Tagline**: Free AI Content Repurposer (Bring Your Own Key)
* **Pricing**: Free

### Описание (Description)
Tired of paying $30/mo for AI content generators? RepurposeAI is a 100% free tool that turns your YouTube videos, articles, or brain dumps into engaging Twitter threads, LinkedIn posts, and SEO blog outlines. Just bring your own Google Gemini API key (which is free!) and generate unlimited content. No subscriptions, your key stays local in your browser.

### Комментарий Мейкера (Maker Comment)
Hi hunters! 👋 I’m [Your Name], the maker of RepurposeAI.

I built this tool because I was frustrated by the subscription fatigue in the AI space. Every tool asks for $20-$30 a month just to wrap a basic LLM prompt.

So, I built a zero-fee alternative. RepurposeAI is a client-side only web app. You plug in your own free Google Gemini API key, paste your messy thoughts or YouTube transcript, and it outputs polished content for X/Twitter, LinkedIn, and your blog.

**Why BYOK (Bring Your Own Key)?**
1. It’s transparent.
2. It's truly unlimited based on your own API limits.
3. Your data stays private (the key is saved in your browser's `localStorage` and never hits any database).

I'd love your feedback! Try it out and let me know which platform's generated content you like the most.

## 3. Запуск в соцсетях (Marketer)

Этот тред был сгенерирован самим же инструментом RepurposeAI для запуска в Twitter (X).

### Twitter Thread

**Твит 1:**
I was tired of paying $30/mo for AI content generators. 💸 

So I spent the weekend building my own. And I'm giving it away for FREE. 

Introducing RepurposeAI: Turn one idea into a Twitter thread, LinkedIn post, and Blog outline in seconds. 🧵👇

**Твит 2:**
Here is the catch: There is no backend. No database. No subscriptions.

RepurposeAI uses a "Bring Your Own Key" (BYOK) model. You just plug in your free Google Gemini API key.

Your key stays local in your browser. You get unlimited generations, forever. 🔒

**Твит 3:**
How it works:
1️⃣ Paste a YouTube transcript, an old article, or just your raw unstructured thoughts.
2️⃣ Enter your free Gemini Key.
3️⃣ Get perfectly formatted content adapted for 3 different platforms at once.

**Твит 4:**
I built this for indie hackers, founders, and creators who are feeling "subscription fatigue." 

Stop paying padding fees. Try it now completely free: [Link to Vercel App] 🚀

Let me know what you think! Every piece of feedback helps.
