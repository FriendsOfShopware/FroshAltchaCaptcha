# 2.2.0

**Added**
- Rate-limit challenge requests to 30 per client IP per 60 seconds by default. [654760b](https://github.com/FriendsOfShopware/FroshAltchaCaptcha/commit/654760b)

**Fixed**
- Prevent replay of solved challenges, including concurrent submissions, and remove the shortcut in the challenge counter range. [c1569d5](https://github.com/FriendsOfShopware/FroshAltchaCaptcha/commit/c1569d5) [6639e48](https://github.com/FriendsOfShopware/FroshAltchaCaptcha/commit/6639e48) [5513c04](https://github.com/FriendsOfShopware/FroshAltchaCaptcha/commit/5513c04)

