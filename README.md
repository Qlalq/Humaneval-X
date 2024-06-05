# Usage
## Answer Generation
Fill in the **openai.api_key** and change the **language** parameter (default is cpp) to select a library in **gen_samples.py**,Run gen_samples.py

``python gen_samples.py``

The sample results are stored in a folder, similar to the following folder:js/data/samples_js.jsonl

## Evaluation of results
``$python evaluate_humaneval_x.py --n_workers 64 --tmp_dir humaneval-x/cpp --problem_file humaneval-x/cpp/data/humaneval_cpp.jsonl.gz --input_file humaneval-x/cpp/data/samples_cpp.jsonl --out_dir humaneval-x/cpp/data/

$python evaluate_humaneval_x.py --n_workers 64 --tmp_dir humaneval-x/go --problem_file humaneval-x/go/data/humaneval_go.jsonl.gz --input_file humaneval-x/go/data/samples_go.jsonl --out_dir humaneval-x/go/data/

$python evaluate_humaneval_x.py --n_workers 64 --tmp_dir humaneval-x/java --problem_file humaneval-x/java/data/humaneval_java.jsonl.gz --input_file humaneval-x/java/data/samples_java.jsonl --out_dir humaneval-x/java/data/ --timeout 1000

$python evaluate_humaneval_x.py --n_workers 64 --tmp_dir humaneval-x/python --problem_file humaneval-x/python/data/humaneval_python.jsonl.gz --input_file humaneval-x/python/data/samples_python.jsonl --out_dir humaneval-x/python/data/

$python evaluate_humaneval_x.py --n_workers 64 --tmp_dir humaneval-x/js --problem_file humaneval-x/js/data/humaneval_js.jsonl.gz --input_file humaneval-x/js/data/samples_js.jsonl --out_dir humaneval-x/js/data/``

## Sample Error Summary
``python false.py``