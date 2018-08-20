# Инструкция по GIT и  Linux командам

### Работа светкам
* Чтобы создать новую ветку, необходимо прописать `git checkout -b new-brannnch-name`
* Чтобы переключиться на ветку: `git checkout branch-name`
* Чтоба включить изменения из другогой ветки в текущую (замерджить): 

## Работа с Linux
* Чтобы создать папку с именем`folder-name`, набираем в командной строке `mkdir folder name`

  mkdir test #  создает папку

  cd test # перейти в папку тест 

  ls -la # 
  
  ls -l #
  
  ls -ls # проверить целосность
  
  touch # отредактировать файл
  
  cat #
  
  cd # перейти в папку
  
  cd .. #
  
  mkdir # создать папку

  vim # перейти в vim, w(сохранить), q(выйти)

  push #

### git add
    
    git add # добавляет содержимое рабоче директории в индекс (Staging area) для последущего коммита

    git commit # 

### git status
    
    git status # показывает состояния файлов в рабочей директории и индексе: какие файлы изменены,
               # но не добавлены в индекс; какие ожидают коммита в индексе.

### git diff

    git diff # используется для вычисления разницы между любыми двумя Git деревьями. 
  
### git commit

    git commit # берёт все данные, добавленные в индекс с помощью git add,
               # и сохраняет их слепок во внутренней базе данных,
               # а затем сдвигает указатель текущей ветки на этот слепок.

### git reset

    git reset # как можно догадаться из названия, используется в основном для отмены изменений. 

