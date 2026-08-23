CREATE TABLE public.lead_clicks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  channel TEXT NOT NULL CHECK (channel IN ('call','whatsapp','email')),
  source TEXT NOT NULL,
  service TEXT,
  page_path TEXT,
  referrer TEXT,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT ALL ON public.lead_clicks TO service_role;

ALTER TABLE public.lead_clicks ENABLE ROW LEVEL SECURITY;

CREATE INDEX lead_clicks_created_at_idx ON public.lead_clicks (created_at DESC);
CREATE INDEX lead_clicks_channel_source_idx ON public.lead_clicks (channel, source);