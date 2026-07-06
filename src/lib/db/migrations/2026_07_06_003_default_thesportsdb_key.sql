INSERT INTO settings ("group", key, value)
VALUES ('ai', 'sports_thesportsdb_api_key', '123')
ON CONFLICT ("group", key)
DO UPDATE SET
  value = EXCLUDED.value,
  updated_at = NOW()
WHERE TRIM(COALESCE(settings.value, '')) = '';
