STATIC_URL = '/static/'
STATICFILES_DIRS = (
    os.path.join(BASE_DIR, "store/static"),
)
STATIC_ROOT = os.path.join(BASE_DIR, "static")