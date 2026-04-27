# ARCHITECTURE

## Архитектурный подход
Проект строится как модульный одностраничный сайт на компонентной архитектуре: каждый блок страницы - отдельный независимый компонент с четкой зоной ответственности и минимальными связями.

Подход обеспечивает:
- быстрый запуск MVP;
- легкое добавление новых секций без переработки существующих;
- переиспользование UI-элементов и анимаций.

## Предлагаемая структура папок и файлов

```txt
rehab-showcase/
  docs/
    PROJECT_OVERVIEW.md
    ARCHITECTURE.md
    TECH_STACK.md
    CURRENT_STATUS.md
  public/
    favicon.ico
    og-cover.jpg
    icons/
      phone.svg
      map.svg
      vk.svg
  src/
    app/
      App.tsx
      main.tsx
      styles.css
    components/
      layout/
        PageContainer.tsx
        Section.tsx
        StickyHelpButton.tsx
      hero/
        HeroSection.tsx
        SunriseBackground.tsx
        CallToActionButton.tsx
      values/
        ValuesSection.tsx
        ValueCard.tsx
      recovery/
        RecoveryTimelineSection.tsx
        RecoveryStepItem.tsx
        ProgressIndicator.tsx
      center/
        CenterSection.tsx
        GlassCard.tsx
      footer/
        FooterSection.tsx
        ContactBlock.tsx
        SocialMorphButton.tsx
      shared/
        SectionTitle.tsx
        AnimatedReveal.tsx
        PhoneLink.tsx
        ExternalLinkButton.tsx
    content/
      siteContent.ts
    config/
      contacts.ts
      routes.ts
      motion.ts
      seo.ts
    hooks/
      useReducedMotion.ts
      useInViewStagger.ts
      useMobileCallAction.ts
    lib/
      animation/
        variants.ts
      utils/
        classNames.ts
        formatPhone.ts
    styles/
      tokens.css
      animations.css
    types/
      content.ts
      ui.ts
    tests/
      e2e/
        call-to-action.spec.ts
      unit/
        formatPhone.test.ts
    vite-env.d.ts
  .editorconfig
  .gitignore
  eslint.config.js
  index.html
  package.json
  tsconfig.json
  tsconfig.app.json
  vite.config.ts
```

## Компоненты и ответственность

### Layout
- `PageContainer` - ограничивает ширину, задает горизонтальные отступы и вертикальный rhythm.
- `Section` - единый каркас секций (id, фон, отступы, aria-атрибуты).
- `StickyHelpButton` - плавающая мобильная CTA-кнопка вызова.

### Hero
- `HeroSection` - главный экран с названием "Путь преодоления", подзаголовком и первичным CTA.
- `SunriseBackground` - фоновый визуал hero (изображение заставки с мягким световым оверлеем).
- `CallToActionButton` - анимированная кнопка "Позвонить 8-920-344-01-10" с `tel:` ссылкой.

### Поддержка и ценности
- `ValuesSection` - композиция секции и заголовок.
- `ValueCard` - карточка ценности ("100% Анонимность", "Братство", "Профессиональный уход", "Возвращение в семью").
- `AnimatedReveal` (shared) - stagger-анимация появления карточек при скролле.

### Этапы выздоровления
- `RecoveryTimelineSection` - контейнер интерактивной шкалы процесса.
- `RecoveryStepItem` - отдельный этап (первый звонок, консультация, адаптация, социализация).
- `ProgressIndicator` - визуальный индикатор прогресса/текущего шага.

### Наш центр
- `CenterSection` - контент о сети центров по России и атмосфере поддержки.
- `GlassCard` - light glassmorphism-плашка (blur + прозрачный белый + деликатный border).

### Footer
- `FooterSection` - финальный контактный блок.
- `ContactBlock` - крупный номер, текст о бесплатном анонимном звонке, адрес.
- `SocialMorphButton` - кнопки внешних ссылок с мягким morph-эффектом на interaction.

### Shared
- `SectionTitle` - общий стиль заголовков секций.
- `PhoneLink` - унифицированный кликабельный номер с аналитикой и форматированием.
- `ExternalLinkButton` - переиспользуемая кнопка внешней ссылки.

## Поток данных
- Статический контент хранится в `src/content/siteContent.ts`.
- Контакты и константы (телефон, адрес, ссылки) хранятся в `src/config/contacts.ts`.
- Компоненты получают данные через props; глобальный state не требуется для MVP.
- UI-состояния интерактивных элементов локальные (hover, activeStep, inView).

## Масштабирование
- Новая секция добавляется как новый модуль в `src/components/<section>/`.
- Любой новый CTA использует `PhoneLink` для единообразия.
- Анимационные схемы централизованы в `src/lib/animation/variants.ts`.
- При расширении в многостраничный режим возможен переход на `src/pages/` без слома текущей структуры.

## Доступность (A11y) и UX-ограничения
- Контраст текста не ниже WCAG AA.
- Все интерактивные элементы доступны с клавиатуры.
- Для пользователей с `prefers-reduced-motion` отключаются декоративные анимации.
- Номер телефона всегда видим на мобильных устройствах (Hero + Sticky CTA + Footer).

## SEO и технические мета-данные
- Заголовок страницы и description с фокусом на всероссийскую сеть и филиалы.
- Open Graph изображение для корректного шаринга.
- Семантическая разметка секций (`header`, `main`, `section`, `footer`).

