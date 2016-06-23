from project.settings import *

DEBUG = True

INTERNAL_IPS = ('127.0.0.1', )

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

SCRIPT_JS_PREFIX = 'http://localhost:8001'

INSTALLED_APPS += (
    'debug_toolbar',
)
