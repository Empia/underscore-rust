var searchIndex = {};
searchIndex['underscore'] = {"items":[[0,"","underscore","",null,null],[0,"vec","","",null,null],[0,"expand","underscore::vec","",null,null],[11,"first","collections::vec","",0,{"inputs":[{"name":"vec"}],"output":{"name":"option"}}],[11,"without","","",0,{"inputs":[{"name":"vec"},{"name":"vec"}],"output":{"name":"vec"}}],[11,"intersection","","",0,{"inputs":[{"name":"vec"},{"name":"vec"}],"output":{"name":"vec"}}],[11,"uniq","","",0,{"inputs":[{"name":"vec"}],"output":{"name":"vec"}}],[11,"index_of","","",0,{"inputs":[{"name":"vec"},{"name":"t"}],"output":{"name":"option"}}],[11,"last_index_of","","",0,{"inputs":[{"name":"vec"},{"name":"t"}],"output":{"name":"option"}}],[11,"object","","",0,{"inputs":[{"name":"vec"},{"name":"vec"}],"output":{"name":"btreemap"}}],[11,"reject","","",0,{"inputs":[{"name":"vec"},{"name":"f"}],"output":{"name":"vec"}}],[8,"VecU","underscore::vec","UnderscoreVec expands collections::vec::Vec",null,null],[10,"first","","Returns the first element of a vector as Option.\n# Example\n```\nuse underscore::vec::VecU;",1,{"inputs":[{"name":"vecu"}],"output":{"name":"option"}}],[10,"without","","Returns a copy of the vector with all instances of the values removed.\n# Example\n```\nuse underscore::vec::VecU;",1,{"inputs":[{"name":"vecu"},{"name":"vec"}],"output":{"name":"vec"}}],[10,"intersection","","Computes the list of values that are the intersection of argument vector.\nEach value in the result is present in each of the arrays.\n# Example\n```\nuse underscore::vec::VecU;",1,{"inputs":[{"name":"vecu"},{"name":"vec"}],"output":{"name":"vec"}}],[10,"uniq","","Produces a duplicate-free version of the vector.\n# Example",1,{"inputs":[{"name":"vecu"}],"output":{"name":"vec"}}],[10,"index_of","","Returns the Option with index which value can be found in the vector.\nPass true for is_sorted to use sorted vector.\n# Example",1,{"inputs":[{"name":"vecu"},{"name":"t"}],"output":{"name":"option"}}],[10,"last_index_of","","Returns the Option with index which value can be found in the vector.\n# Example\n```\nuse underscore::vec::VecU;",1,{"inputs":[{"name":"vecu"},{"name":"t"}],"output":{"name":"option"}}],[10,"object","","Converts vector into BTreeMap.\n# Example\n```\nuse underscore::vec::VecU;",1,{"inputs":[{"name":"vecu"},{"name":"vec"}],"output":{"name":"btreemap"}}],[10,"reject","","reject the values in Vector without the elements that the truth test (predicate) passes.\nThe opposite of vec!().iter().filter();\n# Example\n```\nuse underscore::vec::VecU;",1,{"inputs":[{"name":"vecu"},{"name":"f"}],"output":{"name":"vec"}}],[0,"hashmap","underscore","",null,null],[0,"expands","underscore::hashmap","",null,null],[11,"invert","std::collections::hash::map","",2,{"inputs":[{"name":"hashmap"}],"output":{"name":"hashmap"}}],[11,"pick","","",2,{"inputs":[{"name":"hashmap"},{"name":"vec"}],"output":{"name":"hashmap"}}],[11,"pick_by_filter","","",2,{"inputs":[{"name":"hashmap"},{"name":"f"}],"output":{"name":"hashmap"}}],[11,"omit","","",2,{"inputs":[{"name":"hashmap"},{"name":"vec"}],"output":{"name":"hashmap"}}],[11,"omit_by_filter","","",2,{"inputs":[{"name":"hashmap"},{"name":"f"}],"output":{"name":"hashmap"}}],[11,"defaults","","",2,{"inputs":[{"name":"hashmap"},{"name":"hashmap"}],"output":{"name":"hashmap"}}],[8,"HashMapU","underscore::hashmap","UnderscoreHashMap expands HashMap",null,null],[10,"invert","","Returns a copy of the hashmap where the keys have become the values and the values the keys.\n# Example",3,{"inputs":[{"name":"hashmapu"}],"output":{"name":"hashmap"}}],[10,"pick","","Return a copy of the hashmap, filtered to only have values for the whitelisted keys.\n# Example",3,{"inputs":[{"name":"hashmapu"},{"name":"vec"}],"output":{"name":"hashmap"}}],[10,"pick_by_filter","","Return a copy of the hashmap, filtered to only have values for the vector whitelisted keys.\npick_by_filter filters keys to pick by function.\n# Example",3,{"inputs":[{"name":"hashmapu"},{"name":"f"}],"output":{"name":"hashmap"}}],[10,"omit","","Return a copy of the hashmap, filtered to omit the blacklisted keys (or array of keys).\n# Example",3,{"inputs":[{"name":"hashmapu"},{"name":"vec"}],"output":{"name":"hashmap"}}],[10,"omit_by_filter","","Return a copy of the hashmap, filtered to omit the blacklisted keys (or array of keys).\nomit_by_filter filters keys to pick by function.\n# Example",3,{"inputs":[{"name":"hashmapu"},{"name":"f"}],"output":{"name":"hashmap"}}],[10,"defaults","","Fill in undefined properties in hashmap with the first value present in the following list of defaults objects.\n# Example",3,{"inputs":[{"name":"hashmapu"},{"name":"hashmap"}],"output":{"name":"hashmap"}}],[0,"btreemap","underscore","",null,null],[0,"expands","underscore::btreemap","",null,null],[11,"invert","collections::btree::map","",4,{"inputs":[{"name":"btreemap"}],"output":{"name":"btreemap"}}],[11,"pick","","",4,{"inputs":[{"name":"btreemap"},{"name":"vec"}],"output":{"name":"btreemap"}}],[11,"pick_by_filter","","",4,{"inputs":[{"name":"btreemap"},{"name":"f"}],"output":{"name":"btreemap"}}],[11,"omit","","",4,{"inputs":[{"name":"btreemap"},{"name":"vec"}],"output":{"name":"btreemap"}}],[11,"omit_by_filter","","",4,{"inputs":[{"name":"btreemap"},{"name":"f"}],"output":{"name":"btreemap"}}],[11,"defaults","","",4,{"inputs":[{"name":"btreemap"},{"name":"btreemap"}],"output":{"name":"btreemap"}}],[11,"pairs","","",4,{"inputs":[{"name":"btreemap"}],"output":{"name":"vec"}}],[8,"BTreeMapU","underscore::btreemap","BTreeMapU expands BTreeMap",null,null],[10,"invert","","Returns a copy of the BTreeMap where the keys have become the values and the values the keys.\n# Example",5,{"inputs":[{"name":"btreemapu"}],"output":{"name":"btreemap"}}],[10,"pick","","Return a copy of the BTreeMap, filtered to only have values for the whitelisted keys.\n# Example",5,{"inputs":[{"name":"btreemapu"},{"name":"vec"}],"output":{"name":"btreemap"}}],[10,"pick_by_filter","","Return a copy of the BTreeMap, filtered to only have values for the vector whitelisted keys.\npick_by_filter filters keys to pick by function.\n# Example",5,{"inputs":[{"name":"btreemapu"},{"name":"f"}],"output":{"name":"btreemap"}}],[10,"omit","","Return a copy of the BTreeMap, filtered to omit the blacklisted keys (or array of keys).\nomit_by_filter filters keys to pick by function.",5,{"inputs":[{"name":"btreemapu"},{"name":"vec"}],"output":{"name":"btreemap"}}],[10,"omit_by_filter","","Return a copy of the BTreeMap, filtered to omit the blacklisted keys (or array of keys).\nomit_by_filter filters keys to pick by function.\n# Example",5,{"inputs":[{"name":"btreemapu"},{"name":"f"}],"output":{"name":"btreemap"}}],[10,"defaults","","Fill in undefined properties in BTreeMap with the first value present in the following list of defaults objects.\n# Example",5,{"inputs":[{"name":"btreemapu"},{"name":"btreemap"}],"output":{"name":"btreemap"}}],[10,"pairs","","Convert a BTreeMap into a vector of (key, value) tuple pairs.\n# Example",5,{"inputs":[{"name":"btreemapu"}],"output":{"name":"vec"}}]],"paths":[[3,"Vec"],[8,"VecU"],[3,"HashMap"],[8,"HashMapU"],[3,"BTreeMap"],[8,"BTreeMapU"]]};
initSearch(searchIndex);
