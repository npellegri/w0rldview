<<<<<<< HEAD
import networkx as nx
G = nx.Graph()
G.add_edge("A", "B", weight=4)
G.add_edge("B", "D", weight=2)
G.add_edge("A", "C", weight=3)
G.add_edge("C", "D", weight=4)
path = nx.shortest_path(G, "A", "D", weight="weight")
print(path)
=======
from nltk.tree import Tree
tree = Tree.fromstring("(S (NP The) (VP fell) (. down))")
tree.draw()   
>>>>>>> 4d1d1a15a1084b75e8cd2ff41349ab31d62a51ef
