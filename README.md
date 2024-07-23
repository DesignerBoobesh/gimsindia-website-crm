<br/>
  <h1 align="center">
    GIMSINDIA Website & CRM
  </h1>
<br/>

# Installation guide:
- ## Create a fork and clone the repo
```Shell
https://<github_username>@github.com/DesignerBoobesh/gimsindia-website-crm.git
```
- ## Create a virtualenv
```Shell
pip install virtualenv
```
```Shell
virtualenv venv
```

- ## Activate venv
- Linux -
  ```Shell
  source venv/bin/activate
   ```
- Windows -
  ```Shell
  .\venv\Scripts\activate
   ```

- ## Install the required modules
- (venv)
  ```Shell
  pip install -r requirements.txt
  ```

- ## Migrate & User & Run
- ``` create .env file (same as .env_sample and fill the required fields) ```
- Make Migrations
  ```Shell
  python manage.py makemigrations
  ```
- Migrate all the tables to the DB
  ```Shell
   python manage.py migrate
  ```
- Create SuperUser
  ```Shell
   python manage.py createsuperuser
  ```
- Run Server
  ```Shell
   python manage.py runserver
   ```


