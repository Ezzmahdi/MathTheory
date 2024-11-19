import React from "react";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Chapter7Subspaces = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Chapter 7: Subspaces</h1>
      <hr className="my-6" />

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Motivation</h2>
        <p className="mb-4">
          Understanding how to define a topology on a subset of a topological space is a cornerstone of topology. Subspaces allow us to study the properties of smaller spaces within larger ones and analyze how these properties behave under restrictions.
        </p>
        <h3 className="text-lg font-semibold mb-2">Why Subspaces Matter</h3>
        <p className="mb-2">
          Many practical applications of topology, such as in physics or data analysis, involve subspaces of familiar spaces like <InlineMath math="\mathbb{R}^n" />. These subspaces often inherit properties from their parent spaces. For example:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>The interval <InlineMath math="(0, 1) \subset \mathbb{R}" /> inherits its "usual topology" from <InlineMath math="\mathbb{R}" />.</li>
          <li>Spaces like function spaces often arise as subspaces of more complex structures.</li>
        </ul>
        <p>
          Subspaces are not just practical; they also deepen our theoretical understanding. They enable us to:
        </p>
        <ol className="list-decimal list-inside">
          <li>Study how topological properties (like compactness or connectedness) behave under restriction.</li>
          <li>Introduce new topologies, enhancing our toolkit for mathematical exploration.</li>
        </ol>
      </section>
      <hr className="my-6" />

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Subspace Topologies</h2>

        <h3 className="text-lg font-semibold mb-2">2.1 Definition</h3>
        <p className="mb-2">
          Given a topological space <InlineMath math="(X, T)" /> and a subset <InlineMath math="Y \subset X" />, the <strong>subspace topology</strong> on <InlineMath math="Y" /> is defined as:
        </p>
        <BlockMath math="T_Y = \{ U \cap Y : U \in T \}." />
        <p className="mb-4">
          In this context, <InlineMath math="T_Y" /> is the set of intersections of open sets in <InlineMath math="X" /> with <InlineMath math="Y" />. The resulting pair <InlineMath math="(Y, T_Y)" /> is called a <strong>subspace</strong> of <InlineMath math="(X, T)" />.
        </p>
        <p className="mb-4">
          <strong>Key Point:</strong> The subspace topology aligns naturally with intuition. For instance, the open interval <InlineMath math="(0, 1)" /> inherits a topology from <InlineMath math="\mathbb{R}" />, where the open sets are intersections of open intervals in <InlineMath math="\mathbb{R}" /> with <InlineMath math="(0, 1)" />.
        </p>
        <hr className="my-6" />

        <h3 className="text-lg font-semibold mb-2">2.2 Verification</h3>
        <p className="mb-4">
          <strong>Exercise 2.2:</strong> Show that the subspace topology <InlineMath math="T_Y" /> satisfies the axioms of a topology (closure under unions, intersections, and inclusion of <InlineMath math="Y" /> and <InlineMath math="\emptyset" />). This is straightforward since these properties are inherited from the parent space <InlineMath math="(X, T)" />.
        </p>
        <hr className="my-6" />

        <h3 className="text-lg font-semibold mb-2">2.3 Basis for Subspace Topology</h3>
        <p className="mb-4">
          If <InlineMath math="(X, T)" /> has a basis <InlineMath math="B" />, then the subspace topology on <InlineMath math="Y" /> has a basis:
        </p>
        <BlockMath math="B_Y = \{ B \cap Y : B \in B \}." />
        <p>
          This provides an efficient way to describe open sets in <InlineMath math="Y" /> without directly referring to all open sets in <InlineMath math="X" />.
        </p>
      </section>
      <hr className="my-6" />

      <h2 className="text-xl font-bold  mb-4">3. Examples of Subspace Topologies</h2>

      <h3 className="text-xl font-semibold  mb-2">Example 1: Discrete and Indiscrete Subspaces</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Any subspace of a <strong>discrete space</strong> remains discrete.</li>
        <li>Any subspace of an <strong>indiscrete space</strong> remains indiscrete.</li>
      </ul>
      <hr className="my-6" />

      <h3 className="text-xl font-semibold  mb-2">
        Example 2: Subspaces of <InlineMath math="\mathbb{R}" /> with Usual Topology
      </h3>
      <ol className="list-decimal list-inside mb-4 space-y-2">
        <li>
          <InlineMath math="(0, 1)" /> inherits the topology from <InlineMath math="\mathbb{R}" />, where open sets are
          intervals <InlineMath math="(a, b) \cap (0, 1)" />.
        </li>
        <li>
          <InlineMath math="\mathbb{Z} \subset \mathbb{R}" />: The subspace topology is discrete since for any{" "}
          <InlineMath math="n \in \mathbb{Z}" />,{" "}
          <InlineMath math="(n - \frac{1}{2}, n + \frac{1}{2}) \cap \mathbb{Z} = \{n\}" />.
        </li>
      </ol>
      <hr className="my-6" />

      <h3 className="text-xl font-semibold  mb-2">
        Example 3: Topology on <InlineMath math="\mathbb{Q} \subset \mathbb{R}" />
      </h3>
      <p className="mb-4">
        The subspace topology on <InlineMath math="\mathbb{Q}" /> is generated by:
      </p>
      <p className="bg-gray-100 p-2 rounded mb-4">
        <InlineMath math="B_\mathbb{Q} = \{(a, b) \cap \mathbb{Q} : a < b \in \mathbb{R}\}" />.
      </p>
      <p className="mb-4">
        This illustrates that <InlineMath math="\mathbb{Q}" /> is not discrete since open sets contain infinitely many
        points.
      </p>
      <hr className="my-6" />

      <h3 className="text-xl font-semibold  mb-2">
        Example 4: Unit Circle in <InlineMath math="\mathbb{R}^2" />
      </h3>
      <p className="mb-4">
        The unit circle <InlineMath math="S^1 = \{(x, y) \in \mathbb{R}^2 : x^2 + y^2 = 1\}" /> inherits its topology
        from <InlineMath math="\mathbb{R}^2" />. Its open sets are intersections of open balls in{" "}
        <InlineMath math="\mathbb{R}^2" /> with <InlineMath math="S^1" />.
      </p>
      <hr className="my-6" />

      <h2 className="text-2xl font-bold  mb-4">4. Easy Results and Properties</h2>

      <h3 className="text-xl font-semibold  mb-2">Proposition 3.1</h3>
      <p className="mb-4">
        If <InlineMath math="U" /> is open in <InlineMath math="Y" /> and <InlineMath math="Y" /> is open in{" "}
        <InlineMath math="X" />, then <InlineMath math="U" /> is open in <InlineMath math="X" />.
      </p>
      <hr className="my-6" />

      <h3 className="text-xl font-semibold  mb-2">Proposition 3.2</h3>
      <p className="mb-4">
        For any subset <InlineMath math="A \subset Y \subset X" />, the subspace topology on{" "}
        <InlineMath math="A" /> inherited from <InlineMath math="Y" /> is the same as the one inherited from{" "}
        <InlineMath math="X" />.
      </p>
      <hr className="my-6" />

      <h3 className="text-xl font-semibold  mb-2">Proposition 3.3</h3>
      <p className="mb-4">
        Closure of a set <InlineMath math="B \subset A" /> in the subspace topology of <InlineMath math="A" /> is:
      </p>
      <p className="bg-gray-100 p-2 rounded mb-4">
        <InlineMath math="\text{cl}_A(B) = A \cap \text{cl}_X(B)" />.
      </p>
      <hr className="my-6" />

      <h3 className="text-xl font-semibold  mb-2">Proposition 3.4</h3>
      <p className="mb-4">
        The inclusion map <InlineMath math="i : A \to X" />, where <InlineMath math="i(x) = x" />, is continuous.
      </p>
      <hr className="my-6" />

      <h3 className="text-xl font-semibold  mb-2">Proposition 3.5</h3>
      <p className="mb-4">
        The restriction of a continuous function <InlineMath math="f : X \to Y" /> to a subspace{" "}
        <InlineMath math="A \subset X" /> is continuous.
      </p>
      <hr className="my-6" />

      <h2 className="text-2xl font-bold  mb-4">5. Conclusion</h2>
      <p>
        The concept of subspaces not only enriches our understanding of topological spaces but also provides powerful
        tools for constructing and analyzing new spaces. By leveraging the properties of subspaces, we can explore how
        fundamental topological properties behave and extend across different contexts.
      </p>
    </div>
  );
};

export default Chapter7Subspaces;
