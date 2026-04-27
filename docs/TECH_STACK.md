# TECH STACK

## Рекомендуемый стек для Showcase

### Базовый стек
- **React + TypeScript + Vite**
- **Tailwind CSS** (с CSS-переменными для дизайн-токенов)
- **Framer Motion** для плавных анимаций и интерактивных переходов
- **Lucide Icons** для легких SVG-иконок
- **ESLint + Prettier** для единообразия кода
- **Vitest + Testing Library + Playwright** для базового качества и smoke e2e

## Почему этот стек подходит именно здесь
- **Vite** дает быстрый старт и моментальную разработку для промо-страницы.
- **React** упрощает разделение на независимые блоки и последующее масштабирование.
- **TypeScript** снижает риск ошибок при росте проекта и ускоряет поддержку.
- **Tailwind + tokens** позволяет быстро сделать современный визуал 2025-2026 без тяжелого CSS-долга.
- **Framer Motion** отлично подходит для живых, мягких, "поддерживающих" анимаций (stagger, hover glow, morph).
- **Playwright** проверит главный пользовательский сценарий: звонок в одно касание.

## Библиотеки по задачам
- Анимации: `framer-motion`
- Утилиты классов: `clsx`, `tailwind-merge`
- Тесты unit/integration: `vitest`, `@testing-library/react`
- E2E: `playwright`

## Рекомендации по коду
- Держать весь текст/контент вне JSX в `src/content/siteContent.ts`.
- Контакты и внешние ссылки держать в `src/config/contacts.ts`.
- Не смешивать UI-логику и анимационные параметры: анимации в `src/lib/animation/variants.ts`.
- Каждый раздел страницы - отдельная папка в `src/components`.
- Общие primitives и shared UI - только в `src/components/shared`.

## Цветовая палитра

### Светлая тема (основная)
- Background Primary: `#FDFEFF`
- Background Secondary: `#F4F8FC`
- Surface: `#FFFFFFCC`
- Text Primary: `#123046`
- Text Secondary: `#4A6475`
- Accent Sky: `#7CC7FF`
- Accent Life Green: `#7ED9A5`
- Accent Warm Gold: `#FFD68A`
- Border Soft: `#DCEAF5`

### Темная тема (опциональная, с яркими акцентами)
- Background Primary: `#0B1220`
- Background Secondary: `#121C2F`
- Surface: `#1A2740CC`
- Text Primary: `#EAF4FF`
- Text Secondary: `#AFC5DD`
- Accent Neon Sky: `#41C4FF`
- Accent Green Glow: `#42E8A8`
- Accent Gold Glow: `#FFCC4D`
- Border Soft: `#28425F`

## Типографика
- Шрифт: `Inter` или `Manrope` (sans-serif).
- Заголовки: 700-800, крупный размер, высокая читабельность.
- Основной текст: 400-500, увеличенный line-height (1.5-1.7).

## Производительность и качество
- Lazy-load только тяжелых декоративных визуалов.
- SVG-иконки вместо растра, где возможно.
- Ограничить сложные blur/filters на старых мобильных.
- Целевые показатели Lighthouse mobile: 90+.

## Альтернатива
Если потребуется SSR/SEO на уровне контентного сайта, можно мигрировать на **Next.js** без радикальной смены компонентной структуры. Для MVP Showcase это не обязательно.

