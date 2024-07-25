### Build backend docker

**RUN** ```docker build ./backend -t project_strapi```

### Build frontend docker

**RUN** ```docker build ./frontend -t project_nuxt```

### How to start your containers

**RUN** ```docker-compose up -d```

### How to destroy all containers and volumes

**RUN** ```docker-compose down -v```

### Export database

**RUN** ```docker exec database-name sh -c 'pg_dump -U strapi -h localhost strapi >> strapi.sql'```

After that copy the file from database container.

**RUN** ```docker cp database-name/:strapi.sql .```

The last command will copy the **strapi.sql** file inside your current directory. After that you can move it inside **db_backup** folder from **backend**.

### How to generate fragments automatically

**RUN** ```npm i strapi-fragments-cli -g```

The command will install ```strapi-fragments-cli``` globally.

After that you can simply run inside frontend project the next cli command:

**RUN** ```fragments-cli --component "componentName" --dir "mainDir" --url "strapiUrl"```

Replace **componentName** with your Strapi component in the next format:

* Component **BaseDescription** was created and assigned for Page content type:

**componentName** => **page.base-description**

* Component **BaseForm** was created and assigned for Form content type:

**componentName** => **form.base-form**

If you have **src** as your source folder inside frontend you can mention **mainDir** as **src**, otherwise it will generate files inside **frontend** directory.

Last argument **strapiUrl** can be replaced with your local strapi url, by default is **http://localhost:1337** so you can skip this argument if it's the same.
