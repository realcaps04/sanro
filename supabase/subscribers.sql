-- SANRO "Be with SANRO" email registration
-- Run in Supabase Dashboard → SQL Editor → New query → Run

create table if not exists public.subscribers (
  id bigint generated always as identity primary key,
  email text not null check (
    char_length(email) <= 120
    and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  ),
  method text not null default 'email' check (method in ('email')),
  created_at timestamptz not null default now(),
  constraint subscribers_email_unique unique (email)
);

create index if not exists subscribers_created_at_idx on public.subscribers (created_at desc);

alter table public.subscribers enable row level security;

-- Public site can register an email (publishable / anon key)
drop policy if exists "Anyone can subscribe" on public.subscribers;
create policy "Anyone can subscribe"
  on public.subscribers
  for insert
  to anon, authenticated
  with check (true);

-- No public read/update/delete — view addresses in the Supabase Table Editor / Dashboard
