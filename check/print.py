with open('res.txt', 'r') as file:
    content = file.read()
    content = content.replace('\\n', '\n')
    print(content)