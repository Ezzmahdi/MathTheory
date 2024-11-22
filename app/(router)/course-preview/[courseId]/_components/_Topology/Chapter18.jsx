import React from "react";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Connectedness = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Chapter 18: Connectedness and Path-Connectedness</h1>
      <hr className="my-6" />

      <section>
        <h2 className="text-2xl font-semibold mb-4">Section 18.1: Introduction to Connectedness</h2>
        <p>
          In topology, <strong>connectedness</strong> formalizes the intuitive idea of a space being "in one piece." 
          A connected space cannot be divided into two disjoint, non-empty, open subsets. To make this precise:
        </p>
        <h3 className="text-xl font-medium mt-4">Definition</h3>
        <p>
          A topological space <InlineMath math="(X, T)" /> is <strong>connected</strong> if there do not exist two 
          disjoint non-empty open subsets <InlineMath math="U, V \subseteq X" /> such that:
        </p>
        <ol className="list-decimal ml-6">
          <li><InlineMath math="U \cup V = X" /></li>
          <li><InlineMath math="U \cap V = \emptyset" /></li>
        </ol>
        <p>
          If such subsets <InlineMath math="U" /> and <InlineMath math="V" /> exist, the space <InlineMath math="X" /> 
          is <strong>disconnected</strong>.
        </p>
        <hr className="my-6" />

        <h3 className="text-xl font-medium mt-4">Key Properties of Connected Spaces</h3>
        <ol className="list-decimal ml-6">
          <li><strong>Trivial Subsets:</strong> <InlineMath math="\emptyset" /> and <InlineMath math="X" /> are always connected.</li>
          <li>
            <strong>Union of Connected Sets:</strong> If a family of connected subsets <InlineMath math="\{A_\alpha\}" /> 
            shares at least one common point, their union is connected.
          </li>
          <li>
            <strong>Images of Connected Sets:</strong> The continuous image of a connected set is connected.
          </li>
          <li>
            <strong>Connected Subsets of <InlineMath math="\mathbb{R}" />:</strong> A subset of 
            <InlineMath math="\mathbb{R}" /> is connected if and only if it is an interval.
          </li>
        </ol>
      </section>
      <hr className="my-6" />

      <section className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Section 18.2: Basic Examples of Connected Spaces</h2>
        <ol className="list-decimal ml-6">
          <li>
            <strong>Intervals in <InlineMath math="\mathbb{R}" />:</strong> Any closed, open, or half-open interval 
            in <InlineMath math="\mathbb{R}" />, such as <InlineMath math="[a, b]" />, 
            <InlineMath math="(a, b]" />, or <InlineMath math="[a, \infty)" />, is connected.
          </li>
          <li>
            <strong>Euclidean Spaces:</strong> <InlineMath math="\mathbb{R}^n" /> with the usual topology is 
            connected for all <InlineMath math="n" />.
          </li>
          <li>
            <strong>Singletons:</strong> Any space with only one point is trivially connected.
          </li>
        </ol>
        <hr className="my-6" />

        <h3 className="text-xl font-medium mt-4">Non-Examples</h3>
        <ol className="list-decimal ml-6">
          <li>
            The set <InlineMath math="\mathbb{Q}" /> of rational numbers in <InlineMath math="\mathbb{R}" /> 
            with the usual topology is <strong>not connected</strong>. It can be partitioned into disjoint subsets:
            <InlineMath math="A = \{x \in \mathbb{Q} : x^2 < 2\}" /> and 
            <InlineMath math="B = \{x \in \mathbb{Q} : x^2 > 2\}" />.
          </li>
          <li>
            The union of two disjoint closed intervals <InlineMath math="[0, 1] \cup [2, 3]" /> in 
            <InlineMath math="\mathbb{R}" /> is disconnected.
          </li>
        </ol>
      </section>
      <hr className="my-6" />

      <section className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Section 18.3: Rules and Theorems on Connectedness</h2>
        <h3 className="text-xl font-medium mt-4">Theorem 1: Intermediate Value Theorem</h3>
        <p>
          If <InlineMath math="f : [a, b] \to \mathbb{R}" /> is continuous and 
          <InlineMath math="f(a) < f(b)" />, then for every 
          <InlineMath math="v \in (f(a), f(b))" />, there exists 
          <InlineMath math="c \in (a, b)" /> such that <InlineMath math="f(c) = v" />.
        </p>
        <p>
          <strong>Explanation:</strong> This theorem is a direct consequence of the connectedness of 
          <InlineMath math="[a, b]" /> in <InlineMath math="\mathbb{R}" />. The image 
          <InlineMath math="f([a, b])" /> must also be connected and forms an interval.
        </p>
        <hr className="my-6" />

        <h3 className="text-xl font-medium mt-4">Theorem 2: Connectedness is Finitely Productive</h3>
        <p>
          The product of finitely many connected spaces is connected.
        </p>
        <p>
          <strong>Proof Outline:</strong> Let <InlineMath math="X" /> and <InlineMath math="Y" /> be connected spaces 
          with the product topology. If a function <InlineMath math="f : X \times Y \to \{0, 1\}" /> is not constant, 
          <InlineMath math="X \times Y" /> can be split into two disconnected pieces, violating connectedness.
        </p>
        <p>Therefore, the product <InlineMath math="X \times Y" /> is connected.</p>
        <p><strong>Corollary:</strong> <InlineMath math="\mathbb{R}^n" /> is connected for all <InlineMath math="n \geq 1" />.</p>
      </section>
      <hr className="my-6" />

      <section className="mb-12">
        <h3 className="text-xl font-medium mt-4">
          Theorem 3: <span className="italic">Connectedness is Productive</span>
        </h3>
        <p className="mb-4">
          The product of any family of connected spaces is connected.{" "}
          <span className="italic">
            This requires more technical proof but follows similar reasoning to
            Theorem 2 with additional bookkeeping.
          </span>
        </p>
      </section>

      <hr className="my-6" />
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">
          Applications of Connectedness
        </h3>
        <p className="mb-4">
          Connectedness is crucial for ensuring properties of spaces and
          functions hold without "breaks" or "jumps." For example:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>In Analysis:</strong> Continuous functions on connected
            spaces preserve intervals and are key to understanding real-valued
            functions.
          </li>
          <li>
            <strong>In Complex Analysis:</strong> Connected subsets are used to
            study the behavior of analytic functions, as shown below.
          </li>
        </ul>
      </section>

      <hr className="my-6" />
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Section 18.4: Advanced Applications</h3>

        <h4 className="text-xl font-semibold mb-4">Application 1: Zero Sets of Analytic Functions</h4>
        <p className="mb-4">
          In complex analysis, connectedness helps us study{" "}
          <span className="italic">zero sets</span> of analytic functions.
        </p>
        <p className="mb-4">
          <strong>Theorem:</strong> Let{" "}
          <InlineMath math="f : D \to \mathbb{C}" /> be analytic on an open,
          connected set <InlineMath math="D \subseteq \mathbb{C}" />. If the
          zero set of <InlineMath math="f" /> is non-discrete, then{" "}
          <InlineMath math="f \equiv 0" /> on <InlineMath math="D" />.
        </p>
        <h5 className="text-lg font-semibold mb-4">Idea of Proof:</h5>
        <ol className="list-decimal list-inside space-y-2">
          <li>Define the set <InlineMath math="B" /> where all derivatives of <InlineMath math="f" /> vanish.</li>
          <li>
            Show that <InlineMath math="B" /> is non-empty, open, and closed,
            implying <InlineMath math="B = D" /> (since <InlineMath math="D" />{" "}
            is connected).
          </li>
          <li>
            Conclude that <InlineMath math="f(z) = 0" /> for all{" "}
            <InlineMath math="z \in D" />.
          </li>
        </ol>
      </section>

      <hr className="my-6" />
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Section 18.5: Path-Connectedness</h3>

        <h4 className="text-xl font-semibold mb-4">Definition</h4>
        <p className="mb-4">
          A space <InlineMath math="(X, T)" /> is{" "}
          <span className="italic">path-connected</span> if for any{" "}
          <InlineMath math="a, b \in X" />, there exists a continuous function{" "}
          <InlineMath math="p : [0, 1] \to X" /> such that{" "}
          <InlineMath math="p(0) = a" /> and <InlineMath math="p(1) = b" />.
        </p>
        <hr className="my-6" />

        <h4 className="text-xl font-semibold mb-4">
          Relationship Between Connectedness and Path-Connectedness
        </h4>
        <p className="mb-4">
          Every path-connected space is connected, but the converse is not
          always true.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Example:</strong> <InlineMath math="\mathbb{R}^n" /> is both
            connected and path-connected under the usual topology.
          </li>
          <li>
            Certain topologies (e.g., co-finite) can be connected but not
            path-connected.
          </li>
        </ul>
        <hr className="my-6" />

        <h4 className="text-xl font-semibold mb-4">Examples of Path-Connected Spaces</h4>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <InlineMath math="\mathbb{R}^n" /> with the usual topology:
            Path-connected as any two points can be connected by a straight
            line.
          </li>
          <li>
            Open disks in <InlineMath math="\mathbb{R}^n" />: Any open ball{" "}
            <InlineMath math="B_r(x)" /> is path-connected.
          </li>
        </ul>
        <hr className="my-6" />

        <h4 className="text-xl font-semibold mb-4">Combining Paths</h4>
        <p className="mb-4">
          Paths can be glued together to create new paths. If{" "}
          <InlineMath math="p_1 : [0, 1] \to X" /> is a path from{" "}
          <InlineMath math="a" /> to <InlineMath math="b" /> and{" "}
          <InlineMath math="p_2 : [0, 1] \to X" /> is a path from{" "}
          <InlineMath math="b" /> to <InlineMath math="c" />, we can define:
        </p>
        <BlockMath math={`p(t) = \\begin{cases} 
          p_1(2t) & t \\in [0, \\frac{1}{2}] \\\\
          p_2(2t - 1) & t \\in [\\frac{1}{2}, 1]
          \\end{cases}`} />
        <p>This new <InlineMath math="p" /> is a path from <InlineMath math="a" /> to <InlineMath math="c" />.</p>
        <hr className="my-6" />

        <h4 className="text-xl font-semibold mb-4">Path-Connected but Not Simply Connected</h4>
        <p className="mb-4">
          Some spaces are path-connected but not "simply connected." For
          instance, the unit circle <InlineMath math="S^1" /> is path-connected
          but not simply connected because it has a hole in the middle.
        </p>
      </section>
    </div>
  );
};

export default Connectedness;
