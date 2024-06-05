import time
from datetime import datetime
import json
import requests
from human_eval.data import write_jsonl, read_problems
import openai

def generate_one_completion(task_id, prompt):
    zhu="\nGenerate from the end of my code (no function headers in the answer) until the function is complete(My input + your answer spliced into a completion code), no code blocks (like ``cpp) and main functions.Example Input:/*\nGiven a positive floating point number, it can be decomposed into\nand integer part (largest integer smaller than given number) and decimals\n(leftover part always smaller than 1).\n\nReturn the decimal part of the number.\n>>> truncate_number(3.5)\n0.5\n*/\n#include<stdio.h>\n#include<math.h>\nusing namespace std;\nfloat truncate_number(float number){\n Example answer format:        return number-int(number);\n}\n"
    print(datetime.now().strftime("%H:%M:%S"), task_id)
    openai.api_base = "https://openkey.cloud/v1"
    openai.api_key = "" # 注意填写API!!!!!!!!!!!!!!!!!!!
    res = ""
    try:
        resp = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": zhu},
                {"role": "user", "content": prompt}
            ]
        )
        res = resp.choices[0].message.content
        print(res)
        return res
    except Exception as e:
        print(f"Exception occurs: {e}, wait 3 seconds then retry...")
        time.sleep(3)
        return generate_one_completion(task_id, prompt)

def main(source_file, output_file):
    problems = read_problems(source_file)
    num_samples_per_task = 1
    for task_id in problems:
        for _ in range(num_samples_per_task):
            samples = [
                dict(
                    task_id=task_id,
                    generation=generate_one_completion(task_id, problems[task_id]["prompt"]),
                    canonical_solution=problems[task_id]["canonical_solution"],
                    declaration=problems[task_id]["declaration"],
                    example_test=problems[task_id]["example_test"],
                    prompt=problems[task_id]["prompt"],
                    test=problems[task_id]["test"]
                    # text=problems[task_id]["text"]
                )
            ]
            write_jsonl(output_file, samples, True)

if __name__ == "__main__":
    # 在这里设置数据库
    language = 'cpp'  # 可选值: 'js', 'cpp', 'go', 'java', 'python'
    source_file_mapping = {
        'js': 'js/data/humaneval_js.jsonl.gz',
        'cpp': 'cpp/data/humaneval_cpp.jsonl.gz',
        'go': 'go/data/humaneval_go.jsonl.gz',
        'java': 'java/data/humaneval_java.jsonl.gz',
        'python': 'python/data/humaneval_python.jsonl.gz'
    }
    
    source_file = source_file_mapping[language]
    output_file = f"samples_{language}.jsonl"
    
    main(source_file, output_file)
