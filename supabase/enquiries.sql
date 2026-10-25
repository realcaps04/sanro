-- SANRO "Connect with Us" / Send Enquiry popup
-- Run in Supabase Dashboard → SQL Editor → New query → Run

create table if not exists public.enquiries (
  id bigint generated always as identity primary key,
  name text not null check (char_length(trim(name)) >= 2 and char_length(name) <= 60),
  phone text not null check (char_length(trim(phone)) >= 10 and char_length(phone) <= 16),
  email text check (email is null or (char_length(email) <= 80 and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$')),
  location text not null check (char_length(trim(location)) >= 2 and char_length(location) <= 80),
  interest text not null check (char_length(trim(interest)) >= 1 and char_length(interest) <= 80),
  message text not null check (char_length(trim(message)) >= 10 and char_length(message) <= 1000),
  created_at timestamptz not null default now()
);

create index if not exists enquiries_created_at_idx on public.enquiries (created_at desc);

alter table public.enquiries enable row level security;

-- Public site can submit enquiries (publishable / anon key)
drop policy if exists "Anyone can submit enquiries" on public.enquiries;
create policy "Anyone can submit enquiries"
  on public.enquiries
  for insert
  to anon, authenticated
  with check (true);

-- No public read/update/delete — view leads in the Supabase Table Editor / Dashboard
