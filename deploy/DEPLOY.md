# Деплой — svobodavrf.ru

## Сервер
- IP: 77.221.151.58
- ОС: Ubuntu 24.04.1 LTS
- Web-сервер: nginx 1.24
- Node.js: 22.22.2

## Размещение
- Репозиторий: `/var/www/rehab`
- Собранные файлы: `/var/www/rehab/dist`
- Nginx config: `/etc/nginx/sites-available/svobodavrf.ru`

## Домен
- Домен `svobodavrf.ru` подключён через Cloudflare (проксирование + HTTPS)

## Деплой новой версии
```bash
cd /var/www/rehab
git pull origin main
npm install
npm run build
```

## Дата первого деплоя
2026-04-28
