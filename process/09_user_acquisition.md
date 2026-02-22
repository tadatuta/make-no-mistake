# Шаг 9: Привлечение аудитории (User Acquisition)
**Роли**: Marketer, CEO
**Проект**: RepurposeAI

Сервис успешно развернут на GitHub Pages: [https://tadatuta.github.io/make-no-mistake/](https://tadatuta.github.io/make-no-mistake/)

Наша цель — привлечь первых пользователей, используя стратегию "Build in Public" и фокус на бесплатности решения (Bring Your Own Key). Здесь собраны готовые материалы для публикации на ключевых площадках.

---

## 1. Запуск на Hacker News (Show HN)

Hacker News обожает технические проекты, которые решают реальную проблему и экономят деньги. Особый фокус на BYOK архитектуру (никакой скрытой подписки).

**Title:**
Show HN: I built a 0$ AI Content Repurposer (Bring Your Own API Key)

**Content:**
Hey HN,

I was frustrated by the endless stream of "$30/mo AI wrappers" for basic text generation. So over the weekend, I built RepurposeAI - a completely free alternative for content creators and founders.

It’s a 100% client-side React SPA (hosted on GitHub Pages). You plug in your own Google Gemini API key (which has a generous free tier), paste a messy YouTube transcript or raw thoughts, and it generates formatted posts for Twitter, LinkedIn, and your blog.

Why I built it this way:
1. **Zero running costs:** There is no backend and no database.
2. **Privacy:** Your API key is stored only in your browser's `localStorage` and requests go directly to Google's API.
3. **No subscriptions:** You get unlimited generations based entirely on your own API limits.

I've open-sourced the whole thing too. It was an interesting exercise in building a useful tool with exactly $0 in operational costs.

Live App: https://tadatuta.github.io/make-no-mistake/
GitHub: https://github.com/tadatuta/make-no-mistake

I'd love to hear your thoughts on the code and the BYOK (Bring Your Own Key) UX pattern. Is this the future of indie AI tools?

---

## 2. Запуск на Reddit (r/SideProject & r/OpenAI)

Reddit пользователи ценят честность и не любят откровенную рекламу. Позиционируем как полезный инструмент для сообщества.

**Subreddits:** r/SideProject, r/InternetIsBeautiful, r/Frugal, r/ChatGPT

**Title:**
I got tired of paying $30/mo for AI wrappers, so I built a 100% free alternative (BYOK) and open-sourced it.

**Content:**
Hey everyone! 👋

I noticed a trend where simple AI tools charge hefty monthly subscriptions just to wrap basic API calls. I wanted a tool to repurpose my messy notes and YouTube transcripts into LinkedIn and Twitter posts, but I didn't want another subscription.

So, I built **RepurposeAI**. 

It’s a static web app that uses the **"Bring Your Own Key" (BYOK)** model. You just get a free Google Gemini API key, plug it into the settings, and you can generate unlimited content. 

**The cool parts:**
* **It's 100% Free:** Because you use your own key, I have $0 server costs, so I don't need to charge you anything.
* **Privacy-first:** There is no backend. The app runs entirely in your browser. Your key is saved in `localStorage` and never hits my servers (I don't have any!).
* **Open Source:** You can check the code on GitHub or even fork it and add your own custom prompts.

**Try it out here:** [https://tadatuta.github.io/make-no-mistake/](https://tadatuta.github.io/make-no-mistake/)

Let me know what you think! Does the BYOK model make sense to you for avoiding subscription fatigue?

---

## 3. SEO Статья (Dev.to / Medium)

Эта статья будет работать долгосрочно, привлекая разработчиков и инди-хакеров из поиска.

**Title:**
How to Build a $0 Serverless AI Startup (The Bring Your Own Key Pattern)

**Content:**
*(Draft text for the article)*

The AI gold rush has led to a massive influx of "wrapper" startups. These SaaS products take an interface, attach it to OpenAI or Anthropic's API, and charge users $20-$30 a month. But what if you could build a profitable, highly useful AI tool with zero operational costs?

Enter the **Bring Your Own Key (BYOK)** pattern.

In this article, I'll walk you through how I built and launched [RepurposeAI](https://tadatuta.github.io/make-no-mistake/), a free tool that turns YouTube transcripts into social media content, without spending a single dollar on hosting or LLM tokens.

### The Architecture of a $0 AI Startup

To achieve zero costs, you have to eliminate the two biggest expenses for any AI app: hosting and API usage.

Here is the tech stack I used:
* **Frontend:** React + Vite + Tailwind CSS v4.
* **Hosting:** GitHub Pages (100% free for static sites).
* **AI Engine:** Google Gemini API (users provide their own key).
* **Database:** None. User preferences (like the API key) are stored in the browser's `localStorage`.

By making the application completely client-side, the browser makes secure API requests directly to Google's servers. 

### Overcoming the UX Friction

The biggest challenge with the BYOK model is friction. Most users don't know what an API key is. 

To solve this, I designed a clean, non-intrusive Settings modal that pops up only when an API key is required. We also heavily recommend the **Gemini API** because Google currently offers a very generous free tier, making it genuinely cost-free for the end-user.

### Monetization Without Subscriptions

If the app is free and has no subscriptions, how does it make money? 
Instead of gating the product, I integrated two unobtrusive monetization channels directly into the header:
1. **"Buy Me a Coffee"**: For users who feel the tool saved them hours of work.
2. **"Hire Me"**: A direct link to my professional services. The app essentially serves as an interactive portfolio piece generating warm B2B leads.

### Conclusion

The subscription fatigue is real. By leveraging static hosting and the BYOK model, indie hackers can provide immense value to users for free, while still creating opportunities for passive income and lead generation.

Check out the live app here: [RepurposeAI](https://tadatuta.github.io/make-no-mistake/)
And grab the source code on [GitHub](https://github.com/tadatuta/make-no-mistake).

---

## План действий для CEO:
1. Опубликовать пост на Hacker News (лучшее время: вторник/среда утро по PST).
2. Опубликовать пост на Reddit (разнести по разным сабреддитам в разные дни, чтобы не выглядело как спам).
3. Опубликовать статью на Dev.to и Medium (добавив красивые скриншоты приложения).
4. Проверить работоспособность ссылки "Hire Me" и быть готовым к потоку лидов.
5. Ждать первых донатов!
