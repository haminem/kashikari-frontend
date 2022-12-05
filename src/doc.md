user

- id
- name
- mail
- password

group

- id PK
- name
- currency_id FK

currency

- id PK
- name
- total

user_group

- user_id PK FK
- group_id PK FK

user_currency

- user_id PK FK
- currency_id PK FK
- held
