create table if not exists  public.client (
                                              status integer,
                                              id uuid primary key not null,
                                              company_name character varying(255),
                                              contact character varying(255),
                                              taxid character varying(255),
                                              trade_name character varying(255)
);

alter table public.client
    owner to postgres;

create unique index if not exists client_pkey
    on public.client (id);