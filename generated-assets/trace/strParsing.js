if (allTraceData === undefined) {
 var allTraceData = {};
 }
 allTraceData["strParsing"] = {"code": "data = 'From stephen.marquard@uct.ac.za Sat Jan  5 09:14:16 2008'\natpos = data.find('@')\nprint(atpos)\nspacepos = data.find(' ', atpos)\nprint(spacepos)\nhost = data[atpos + 1:spacepos]\nprint(host)\n\n", "trace": [{"line": 1, "event": "step_line", "func_name": "<module>", "globals": {}, "ordered_globals": [], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 2, "event": "step_line", "func_name": "<module>", "globals": {"data": "From stephen.marquard@uct.ac.za Sat Jan  5 09:14:16 2008"}, "ordered_globals": ["data"], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 3, "event": "step_line", "func_name": "<module>", "globals": {"data": "From stephen.marquard@uct.ac.za Sat Jan  5 09:14:16 2008", "atpos": 21}, "ordered_globals": ["data", "atpos"], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"data": "From stephen.marquard@uct.ac.za Sat Jan  5 09:14:16 2008", "atpos": 21}, "ordered_globals": ["data", "atpos"], "stack_to_render": [], "heap": {}, "stdout": "21\n"}, {"line": 5, "event": "step_line", "func_name": "<module>", "globals": {"data": "From stephen.marquard@uct.ac.za Sat Jan  5 09:14:16 2008", "atpos": 21, "spacepos": 31}, "ordered_globals": ["data", "atpos", "spacepos"], "stack_to_render": [], "heap": {}, "stdout": "21\n"}, {"line": 6, "event": "step_line", "func_name": "<module>", "globals": {"data": "From stephen.marquard@uct.ac.za Sat Jan  5 09:14:16 2008", "atpos": 21, "spacepos": 31}, "ordered_globals": ["data", "atpos", "spacepos"], "stack_to_render": [], "heap": {}, "stdout": "21\n31\n"}, {"line": 7, "event": "step_line", "func_name": "<module>", "globals": {"data": "From stephen.marquard@uct.ac.za Sat Jan  5 09:14:16 2008", "atpos": 21, "spacepos": 31, "host": "uct.ac.za"}, "ordered_globals": ["data", "atpos", "spacepos", "host"], "stack_to_render": [], "heap": {}, "stdout": "21\n31\n"}, {"line": 7, "event": "return", "func_name": "<module>", "globals": {"data": "From stephen.marquard@uct.ac.za Sat Jan  5 09:14:16 2008", "atpos": 21, "spacepos": 31, "host": "uct.ac.za"}, "ordered_globals": ["data", "atpos", "spacepos", "host"], "stack_to_render": [], "heap": {}, "stdout": "21\n31\nuct.ac.za\n"}]}