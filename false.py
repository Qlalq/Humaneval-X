import json

def process_language_data(language):
    # 打开源文件并读取数据
    with open(f'{language}/data/samples_{language}_results.jsonl', 'r') as source_file:
        data = source_file.readlines()

    # 创建一个空列表来存储"passed"字段为false的数据
    false_data = []

    # 遍历源文件中的每一行数据，将每一行数据转换为Python字典
    for line in data:
        line_dict = json.loads(line)
        
        # 检查每个字典的"passed"字段，如果值为false，就将这个字典添加到列表中
        if not line_dict['passed']:
            false_data.append(json.dumps(line_dict).replace("\\n", "\n"))

    # 打开目标文件并将列表中的数据写入文件
    with open(f'HEx_{language}_GPT4ofalse.txt', 'w') as target_file:
        for line in false_data:
            target_file.write(line)
            target_file.write('\n--------------------\n')

# 使用这个函数来处理不同语言的数据（go、java由于环境缺失，评估有误）
for language in ['cpp', 'java', 'python', 'go', 'js']:
    process_language_data(language)