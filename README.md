# Project Stack - Voice SaaS

## Frontend
- React (SPA)
- React Router
- Firebase Auth (Gmail, social logins)
- WebSocket (for real-time voice generation progress bar)

## Backend
- Node.js + Express
- Endpoints (to be decided)
- Firebase token verification
- Interaction with Docker via API
- Logging and monitoring

## Docker
- Separate container with your TTS workflow
- Container API: POST text + preset → returns WAV/MP3

## SaaS / Subscriptions
- Stripe / Paddle for payments
- Firebase Auth for user management
- Backend checks subscription before voice generation

## Database
- SQL / NoSQL (choice TBD)
- Stores users, subscriptions, history, presets


# Project Stack - Voice SaaS

## Frontend
- React (SPA)
- React Router
- Firebase Auth (Gmail, social logins)
- WebSocket (for real-time voice generation progress bar)

## Backend
- Node.js + Express
- Endpoints (to be decided)
- Firebase token verification
- Interaction with Docker via API
- Logging and monitoring

## Docker
- Separate container with your TTS workflow
- Container API: POST text + preset → returns WAV/MP3

## SaaS / Subscriptions
- Stripe / Paddle for payments
- Firebase Auth for user management
- Backend checks subscription before voice generation

## Database
- SQL / NoSQL (choice TBD)
- Stores users, subscriptions, history, presets




# Дорожная карта проекта

## Этап 1: Прототип
- React SPA: ввод текста → генерация голоса → воспроизведение аудио
- Node.js + Express backend: эндпоинт `/generate-voice`
- Docker контейнер с workflow TTS
- Локальная БД (SQLite или in-memory) для прототипа

## Этап 2: Аутентификация
- Интеграция Firebase Auth (Gmail, соцсети)
- Backend проверяет Firebase токен
- Генерация голоса доступна только авторизованным пользователям

## Этап 3: Пресеты
- Таблица/коллекция в БД для пресетов
- CRUD эндпоинты для пресетов на backend
- UI на frontend: выбор, создание, редактирование пресетов

## Этап 4: История и ссылки
- Таблица/коллекция в БД для истории генераций
- Сохранение сгенерированных аудио и ссылок
- Frontend: список прошлых генераций, скачивание или копирование ссылки

## Этап 5: SaaS / Подписки
- Интеграция Stripe / Paddle для платежей
- Backend проверяет подписку перед генерацией голоса
- Frontend: страница управления подпиской

## Этап 6: Оптимизация
- Очередь генерации голосов (BullMQ / Redis)
- Масштабирование Docker контейнеров для параллельной обработки
- Кэширование популярных пресетов
- Логирование и мониторинг (Winston / Sentry)
