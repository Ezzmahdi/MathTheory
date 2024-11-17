import { InlineMath, BlockMath } from 'react-katex';

function ContinuousFunctions() {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Chapter 21: Continuous Functions</h1>
      <hr className="my-6" />

      <p className="mb-4">
        Continuity is a central concept in analysis and topology, capturing the idea of functions behaving smoothly without abrupt changes. In this chapter, we explore continuity from multiple perspectives, integrating definitions, rules, and proofs to provide a comprehensive understanding.
      </p>
      <hr className="my-6" />
 
      <h2 className="text-xl font-semibold mt-6 mb-3">1. Understanding Continuity: Epsilon-Delta Definition</h2>
      <h3 className="text-lg font-medium mb-2">Definition</h3>
      <p className="mb-4">
        Let <InlineMath math="f: X \to Y" /> be a function, where <InlineMath math="X" /> and <InlineMath math="Y" /> are metric spaces with metrics <InlineMath math="d_X" /> and <InlineMath math="d_Y" />, respectively. The function <InlineMath math="f" /> is said to be continuous at a point <InlineMath math="p \in X" /> if:
      </p>
      <BlockMath math="\forall \epsilon > 0, \exists \delta > 0 \text{ such that } d_X(x, p) < \delta \implies d_Y(f(x), f(p)) < \epsilon." />
      <hr className="my-6" />

      <h3 className="text-lg font-medium mt-4 mb-2">Explanation</h3>
      <p className="mb-4">
        This definition ensures that small changes in the input (<InlineMath math="x" />) result in small changes in the output (<InlineMath math="f(x)" />). The goal is to make the output as close to <InlineMath math="f(p)" /> as desired (within <InlineMath math="\epsilon" />) by controlling how close <InlineMath math="x" /> is to <InlineMath math="p" /> (within <InlineMath math="\delta" />).
      </p>
      <hr className="my-6" />

      <h3 className="text-lg font-medium mt-4 mb-2">Continuous on a Set</h3>
      <p className="mb-4">
        A function <InlineMath math="f" /> is continuous on a set <InlineMath math="X" /> if it is continuous at every point <InlineMath math="p \in X" />.
      </p>
      <hr className="my-6" />

      <h2 className="text-xl font-semibold mt-8 mb-3">2. Topological Characterizations of Continuity</h2>
      <p className="mb-4">
        The epsilon-delta definition, while precise, can be cumbersome. Topology offers a broader and often more intuitive framework to understand continuity through open and closed sets.
      </p>
      <hr className="my-6" />

      <h3 className="text-lg font-medium mt-8">2.1 Open Set Characterization</h3>
      <h4 className="text-md font-medium mb-2 mt-2">Theorem</h4>
      <p className="mb-4">
        A function <InlineMath math="f: X \to Y" /> is continuous if and only if the preimage of every open set in <InlineMath math="Y" /> is open in <InlineMath math="X" />.
      </p>

      <h4 className="text-md font-medium mt-4 mb-2">Proof:</h4>
      <ul className="list-decimal list-inside mb-4 space-y-4">
        <li>
            <strong>(Continuity implies open preimages)</strong> Let <InlineMath math="f" /> be continuous, and let <InlineMath math="U \subseteq Y" /> be an open set. For any point <InlineMath math="p \in f^{-1}(U)" />, <InlineMath math="f(p) \in U" />. Since <InlineMath math="U" /> is open, there exists <InlineMath math="\epsilon > 0" /> such that <InlineMath math="B_Y(f(p), \epsilon) \subseteq U" />. By continuity, there exists <InlineMath math="\delta > 0" /> such that <InlineMath math="x \in B_X(p, \delta) \implies f(x) \in B_Y(f(p), \epsilon)" />. Thus, <InlineMath math="B_X(p, \delta) \subseteq f^{-1}(U)" />, showing that <InlineMath math="f^{-1}(U)" /> is open.
        </li>
        <li>
            <strong>(Open preimages imply continuity)</strong> Suppose the preimage of every open set in <InlineMath math="Y" /> is open in <InlineMath math="X" />. Let <InlineMath math="p \in X" /> and <InlineMath math="\epsilon > 0" />. The set <InlineMath math="B_Y(f(p), \epsilon)" /> is open in <InlineMath math="Y" />, so <InlineMath math="f^{-1}(B_Y(f(p), \epsilon))" /> is open in <InlineMath math="X" />. Since <InlineMath math="p \in f^{-1}(B_Y(f(p), \epsilon))" />, there exists <InlineMath math="\delta > 0" /> such that <InlineMath math="B_X(p, \delta) \subseteq f^{-1}(B_Y(f(p), \epsilon))" />. Hence, <InlineMath math="f" /> is continuous at <InlineMath math="p" />.
        </li>
      </ul>
      <hr className="my-6" />

      <h2 className="text-xl font-bold">Further Explanation</h2>

      <h3 className="text-xl font-semibold mt-8">Key Concepts</h3>
      <ul className="list-disc pl-8 mt-4">
        <li>
          <strong>Function <InlineMath math="f" /></strong>: A rule that takes an element <InlineMath math="x" /> from set <InlineMath math="X" /> and maps it to an element <InlineMath math="f(x)" /> in set <InlineMath math="Y" />.
        </li>
        <li>
          <strong>Open Set</strong>: A set where every point inside it has a little neighborhood around it that’s also inside the set. For example, in real numbers, an open interval like <InlineMath math="(0, 1)" /> is open because you can pick any point inside it and find a small range around that point that stays inside the interval.
        </li>
        <li>
          <strong>Preimage</strong>: The preimage <InlineMath math="f^{-1}(U)" /> of a set <InlineMath math="U" /> in <InlineMath math="Y" /> is the set of all points in <InlineMath math="X" /> that get mapped to <InlineMath math="U" />. In simpler terms, it’s the "input values" that lead to the "output values" in <InlineMath math="U" />.
        </li>
        <li>
          <strong>Continuous Function</strong>: A function is continuous if small changes in the input <InlineMath math="x" /> cause small changes in the output <InlineMath math="f(x)" />.
        </li>
      </ul>


      <h3 className="text-lg font-semibold mt-8">The Proof in Simple Steps</h3>

      <h4 className="text-lg font-medium mt-4">Part 1: Continuity implies open preimages</h4>
      <p>
        If <InlineMath math="f" /> is continuous, then for any open set <InlineMath math="U" /> in <InlineMath math="Y" />, the set of points in <InlineMath math="X" /> that map to <InlineMath math="U" /> (the preimage <InlineMath math="f^{-1}(U)" />) is also an open set in <InlineMath math="X" />.
      </p>
      <p className="mt-4">
        <strong>Why?</strong> Because for any point <InlineMath math="p" /> in the preimage <InlineMath math="f^{-1}(U)" />, the output <InlineMath math="f(p)" /> is inside <InlineMath math="U" />. Since <InlineMath math="U" /> is open, we can always find a little neighborhood around <InlineMath math="f(p)" /> that stays inside <InlineMath math="U" />. By the definition of continuity, we can find a small neighborhood around <InlineMath math="p" /> in <InlineMath math="X" /> that gets mapped into that neighborhood of <InlineMath math="f(p)" /> in <InlineMath math="U" />. This shows that <InlineMath math="f^{-1}(U)" /> is open.
      </p>

      <h4 className="text-lg font-medium mt-4">Part 2: Open preimages imply continuity</h4>
      <p>
        Suppose for every open set <InlineMath math="U" /> in <InlineMath math="Y" />, the preimage <InlineMath math="f^{-1}(U)" /> is open in <InlineMath math="X" />. We need to show that <InlineMath math="f" /> is continuous.
      </p>
      <p className="mt-4">
        <strong>Why?</strong> Take any point <InlineMath math="p" /> in <InlineMath math="X" /> and any small <InlineMath math="\epsilon > 0" />. We can consider a small neighborhood around <InlineMath math="f(p)" /> in <InlineMath math="Y" />, which is an open set. The preimage of this neighborhood (i.e., the set of points in <InlineMath math="X" /> that map to it) is open by assumption, and it contains <InlineMath math="p" />. Therefore, there is a small neighborhood around <InlineMath math="p" /> in <InlineMath math="X" /> that gets mapped into the small neighborhood around <InlineMath math="f(p)" />, showing that <InlineMath math="f" /> is continuous.
      </p>
      <hr className="my-6" />

      <h3 className="text-xl font-semibold mt-8">2.2 Closed Set Characterization</h3>
      <h4 className="text-lg font-medium mt-4">Theorem</h4>
      <p>
        A function <InlineMath math="f: X \to Y" /> is continuous if and only if the preimage of every closed set in <InlineMath math="Y" /> is closed in <InlineMath math="X" />.
      </p>

      <h4 className="text-lg font-medium mt-4">Proof</h4>
      <p>This follows from the open set characterization and the fact that the complement of a closed set is open:</p>
      <ul className="list-disc pl-8 mt-2">
        <li>
          Let <InlineMath math="C \subseteq Y" /> be closed. Its complement <InlineMath math="C^c = Y \setminus C" /> is open.
        </li>
        <li>
          By the open set characterization, <InlineMath math="f^{-1}(C^c)" /> is open in <InlineMath math="X" />.
        </li>
        <li>
          But <InlineMath math="f^{-1}(C^c) = X \setminus f^{-1}(C)" />, so <InlineMath math="f^{-1}(C)" /> is closed.
        </li>
      </ul>

      <hr className="my-6" />

      <h3 className="text-xl font-semibold mt-8">3. Continuity and Compactness</h3>
      <h4 className="text-lg font-medium mt-4">Theorem</h4>
      <p>
        If <InlineMath math="f: X \to Y" /> is continuous and <InlineMath math="X" /> is compact, then <InlineMath math="f(X)" /> is compact.
      </p>

      <h4 className="text-lg font-medium mt-4">Proof</h4>
      <p>
        Let <InlineMath math="\{V_\alpha\}_{\alpha \in A}" /> be an open cover of <InlineMath math="f(X)" />. We want to show that it has a finite subcover.
      </p>
      <ul className="list-disc pl-8 mt-2">
        <li>The preimages <InlineMath math="f^{-1}(V_\alpha)" /> form an open cover of <InlineMath math="X" />.</li>
        <li>
          Since <InlineMath math="X" /> is compact, there exists a finite subcover <InlineMath math="\{f^{-1}(V_1), \dots, f^{-1}(V_n)\}" />.
        </li>
        <li>
          Then <InlineMath math="\{V_1, \dots, V_n\}" /> is a finite subcover of <InlineMath math="f(X)" />, proving compactness.
        </li>
      </ul>

      <p className="mt-4 font-semibold">Corollary</p>
      <p>A continuous function on a compact space attains its maximum and minimum values.</p>

      <hr className="my-6" />

      <h3 className="text-xl font-semibold mt-8">4. Continuity and Connectedness</h3>
      <h4 className="text-lg font-medium mt-4">Theorem</h4>
      <p>
        If <InlineMath math="f: X \to Y" /> is continuous and <InlineMath math="X" /> is connected, then <InlineMath math="f(X)" /> is connected.
      </p>

      <h4 className="text-lg font-medium mt-4">Proof</h4>
      <p>
        Assume <InlineMath math="f(X)" /> is not connected. Then <InlineMath math="f(X)" /> can be written as <InlineMath math="A \cup B" />, where <InlineMath math="A" /> and <InlineMath math="B" /> are non-empty, disjoint open sets in <InlineMath math="f(X)" />.
      </p>
      <ul className="list-disc pl-8 mt-2">
        <li>
          By the open set characterization, <InlineMath math="f^{-1}(A)" /> and <InlineMath math="f^{-1}(B)" /> are open in <InlineMath math="X" />, and they are disjoint.
        </li>
        <li>
          Since <InlineMath math="f^{-1}(A) \cup f^{-1}(B) = X" />, and <InlineMath math="X" /> is connected, either <InlineMath math="f^{-1}(A) = \emptyset" /> or <InlineMath math="f^{-1}(B) = \emptyset" />, contradicting the assumption that <InlineMath math="A" /> and <InlineMath math="B" /> are non-empty.
        </li>
      </ul>
      <p>Thus, <InlineMath math="f(X)" /> is connected.</p>

      <hr className="my-6" />

      <h3 className="text-xl font-semibold mt-8">5. Continuity of Compositions</h3>
      <h4 className="text-lg font-medium mt-4">Theorem</h4>
      <p>
        If <InlineMath math="f: X \to Y" /> and <InlineMath math="g: Y \to Z" /> are continuous, then <InlineMath math="g \circ f : X \to Z" /> is continuous.
      </p>

      <h4 className="text-lg font-medium mt-4">Proof</h4>
      <p>
        Let <InlineMath math="U \subseteq Z" /> be open. Since <InlineMath math="g" /> is continuous, <InlineMath math="g^{-1}(U)" /> is open in <InlineMath math="Y" />. Since <InlineMath math="f" /> is continuous, <InlineMath math="f^{-1}(g^{-1}(U))" /> is open in <InlineMath math="X" />.
      </p>
      <p>But <InlineMath math="f^{-1}(g^{-1}(U)) = (g \circ f)^{-1}(U)" />, proving that <InlineMath math="g \circ f" /> is continuous.</p>

      <hr className="my-6" />

      <h3 className="text-xl font-semibold mt-8">6. Homeomorphisms</h3>
      <h4 className="text-lg font-medium mt-4">Definition</h4>
      <p>
        A function <InlineMath math="f: X \to Y" /> is a homeomorphism if:
      </p>
      <ol className="list-decimal pl-8 mt-2">
        <li><InlineMath math="f" /> is bijective.</li>
        <li><InlineMath math="f" /> is continuous.</li>
        <li><InlineMath math="f^{-1}" /> is continuous.</li>
      </ol>

      <h4 className="text-lg font-medium mt-4">Theorem</h4>
      <p>
        If <InlineMath math="f: X \to Y" /> is a continuous bijection and <InlineMath math="X" /> is compact, then <InlineMath math="f" /> is a homeomorphism.
      </p>

      <h4 className="text-lg font-medium mt-4">Proof</h4>
      <p>
        Since <InlineMath math="f" /> is continuous and <InlineMath math="X" /> is compact, <InlineMath math="f(X)" /> is compact. If <InlineMath math="Y" /> is Hausdorff, then compact subsets of <InlineMath math="Y" /> are closed. Hence, <InlineMath math="f(X)" /> is closed in <InlineMath math="Y" />. Since <InlineMath math="f" /> is bijective, <InlineMath math="f^{-1}" /> is continuous, making <InlineMath math="f" /> a homeomorphism.
      </p>

      <hr className="my-6" />

      <h2 className="text-2xl font-bold mt-8">Conclusion</h2>
      <p>
        Continuity ties local behavior to global topological properties, providing a bridge between analysis and topology. By understanding its various characterizations, we gain a powerful toolkit for exploring the structure of functions and spaces.
      </p>
    </div>
  );
}

export default ContinuousFunctions;
