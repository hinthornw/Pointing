#!/bin/bash
python launch_hits.py \
  --html_template=all_actions.html \
  --hit_properties_file=hit_properties/weak.json \
  --input_json_file=examples/image_sentence/example_input.txt \
  --hit_ids_file=examples/weak/hit_ids.txt
