import React from "react";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const FiniteProducts = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold ">Chapter 8: Finite Products</h1>

      <hr className="my-6" />
      <section>
        <h2 className="text-2xl font-semibold ">1. Motivation</h2>
        <p className="">
          In topology, we often seek ways to construct new spaces from existing ones. Finite products provide a systematic method for combining
          topological spaces, allowing us to explore relationships between their properties. For instance, recall the topology of{" "}
          <InlineMath math="\mathbb{R}^2" /> generated by open rectangles{" "}
          <InlineMath math="(a, b) \times (c, d)" />. This structure generalizes to arbitrary finite products of spaces, which we define as
          the <strong>product topology</strong>.
        </p>
        <p className="">
          Moreover, finite products introduce a new lens for examining topological properties, helping us determine whether certain
          characteristics are preserved under product operations. For now, we focus on finite products, as infinite products require more
          advanced tools.
        </p>
      </section>

      <hr className="my-6" />
      <section>
        <h2 className="text-2xl font-semibold mb-4">2. Finite Product Topologies</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold ">2.1 Definition</h3>
          <p className="">
            Let <InlineMath math="(X, \mathcal{T})" /> and <InlineMath math="(Y, \mathcal{U})" /> be topological spaces. The <strong>product
            topology</strong> on <InlineMath math="X \times Y" /> is the topology generated by the basis:
          </p>
          <BlockMath math="\mathcal{B} = \{ U \times V : U \in \mathcal{T}, V \in \mathcal{U} \}" />
          <p className="">
            For <InlineMath math="n" />-dimensional products, given{" "}
            <InlineMath math="(X_1, \mathcal{T}_1), (X_2, \mathcal{T}_2), \dots, (X_n, \mathcal{T}_n)" />, the product topology on{" "}
            <InlineMath math="X_1 \times X_2 \times \cdots \times X_n" /> has a basis:
          </p>
          <BlockMath math="\mathcal{B} = \{ U_1 \times U_2 \times \cdots \times U_n : U_i \in \mathcal{T}_i \text{ for all } i \}" />
        </div>

        <hr className="my-6" />
        <div className="space-y-4">
          <h3 className="text-xl font-semibold ">2.2 Intuition</h3>
          <p className="">
            The product topology ensures that if each component space <InlineMath math="X_i" /> behaves “nicely” (e.g., open sets align well
            within the space), their combination also retains meaningful structure. For instance, in{" "}
            <InlineMath math="\mathbb{R}^2" />, an open rectangle is simply the product of two open intervals, representing the product
            topology’s basis elements.
          </p>
        </div>

        <hr className="my-6" />
        <div className="space-y-4">
          <h3 className="text-xl font-semibold ">2.3 Properties of Bases</h3>
          <p className="">
            <strong>Proposition 1</strong>: Let <InlineMath math="\mathcal{B}_X" /> and <InlineMath math="\mathcal{B}_Y" /> be bases for{" "}
            <InlineMath math="(X, \mathcal{T})" /> and <InlineMath math="(Y, \mathcal{U})" />, respectively. Then:
          </p>
          <BlockMath math="\mathcal{B} = \{ U \times V : U \in \mathcal{B}_X, V \in \mathcal{B}_Y \}" />
          <p className="">forms a basis for the product topology on <InlineMath math="X \times Y" />.</p>
        </div>

        <hr className="my-6" />
        <div className="space-y-4">
          <h3 className="text-xl font-semibold ">Example 2.1</h3>
          <ul className="list-disc list-inside ">
            <li>
              <strong>Discrete Spaces</strong>: The product of discrete spaces is discrete.
            </li>
            <li>
              <strong>Indiscrete Spaces</strong>: The product of indiscrete spaces is indiscrete.
            </li>
            <li>
              <strong>Standard <InlineMath math="\mathbb{R}^2" /></strong>: <InlineMath math="(\mathbb{R}_{\text{usual}})^2" /> is the usual
              topology on <InlineMath math="\mathbb{R}^2" />.
            </li>
            <li>
              <strong>Sorgenfrey Plane</strong>: The product of Sorgenfrey lines generates the Sorgenfrey plane, where basis elements are
              rectangles with closed left and bottom edges.
            </li>
          </ul>
        </div>
      </section>
      <hr className="my-6" />

      <section>
        <h2 className="text-2xl font-bold mb-4">3. Projection Maps</h2>
        <p className="mb-4">
          Projection maps simplify analysis within product spaces by isolating specific components.
        </p>
        <hr className="my-6" />

        <h3 className="text-xl font-semibold mb-2">3.1 Definition</h3>
        <p className="mb-4">
          For <InlineMath math="(X_1, \mathcal{T}_1), \dots, (X_n, \mathcal{T}_n)" />, the{" "}
          <strong>projection map</strong> <InlineMath math="\pi_k" /> for{" "}
          <InlineMath math="k = 1, 2, \dots, n" /> is:
        </p>
        <BlockMath math="\pi_k: X_1 \times X_2 \times \cdots \times X_n \to X_k, \quad \pi_k(x_1, x_2, \dots, x_n) = x_k." />
        <p className="mt-4">
          For <InlineMath math="n = 2" />, <InlineMath math="\pi_1(x, y) = x" /> and{" "}
          <InlineMath math="\pi_2(x, y) = y" />.
        </p>
        <hr className="my-6" />

        <h3 className="text-xl font-semibold mt-6 mb-2">3.2 Key Properties</h3>
        <ul className="list-disc pl-6">
          <li className="mb-4">
            <strong>Preimages:</strong>
            <BlockMath math="\pi_1^{-1}(A) = A \times Y, \quad \pi_2^{-1}(B) = X \times B." />
            <p>
              For <InlineMath math="A \subset X" />, <InlineMath math="B \subset Y" />:
            </p>
            <BlockMath math="A \times B = \pi_1^{-1}(A) \cap \pi_2^{-1}(B)." />
          </li>
          <li>
            <strong>Continuity Characterization:</strong> The product topology is the{" "}
            <strong>coarsest topology</strong> making projection maps{" "}
            <InlineMath math="\pi_1" /> and <InlineMath math="\pi_2" /> continuous.
          </li>
        </ul>
      </section>

      <hr className="my-6" />
      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4">4. Continuity and Product Spaces</h2>
        <p className="mb-4">
          The behavior of continuous functions in product spaces aligns with their projections:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg border">
          <h3 className="text-lg font-semibold">Proposition 3</h3>
          <p>
            Let <InlineMath math="f: Z \to X \times Y" />. Then <InlineMath math="f" /> is continuous if and only if both{" "}
            <InlineMath math="\pi_1 \circ f" /> and <InlineMath math="\pi_2 \circ f" /> are continuous.
          </p>
        </div>
        <h3 className="text-lg font-semibold mt-6">Proof Sketch</h3>
        <ol className="list-decimal pl-6">
          <li className="mb-2">
            <InlineMath math="(\Rightarrow)" />: Compositions of continuous functions are continuous.
          </li>
          <li>
            <InlineMath math="(\Leftarrow)" />: Show preimages of subbasis sets{" "}
            <InlineMath math="U \times Y" /> and <InlineMath math="X \times V" /> under{" "}
            <InlineMath math="f" /> are open.
          </li>
        </ol>
      </section>

      <hr className="my-6" />
      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4">5. Finitely Productive Properties</h2>

        <h3 className="text-xl font-semibold mb-2">5.1 Definition</h3>
        <p className="mb-4">
          A topological property <InlineMath math="\phi" /> is <strong>finitely productive</strong> if{" "}
          <InlineMath math="X_1, X_2, \dots, X_n" /> having <InlineMath math="\phi" /> implies{" "}
          <InlineMath math="X_1 \times X_2 \times \cdots \times X_n" /> has <InlineMath math="\phi" />.
        </p>
        <hr className="my-6" />

        <h3 className="text-xl font-semibold mb-2">5.2 Examples of Finitely Productive Properties</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Separation:</strong> <InlineMath math="T_0, T_1" />, Hausdorff.
          </li>
          <li>
            <strong>Countability:</strong> First countable, second countable, separable.
          </li>
          <li>
            <strong>Compactness:</strong> Finite products of compact spaces are compact.
          </li>
        </ul>
        <hr className="my-6" />

        <h4 className="text-lg font-semibold">Proof for Hausdorff Property</h4>
        <p className="mt-2">
          Let <InlineMath math="(X, \mathcal{T})" /> and <InlineMath math="(Y, \mathcal{U})" /> be Hausdorff, and{" "}
          <InlineMath math="(x_1, y_1), (x_2, y_2)" /> be distinct in{" "}
          <InlineMath math="X \times Y" />. Without loss of generality, assume{" "}
          <InlineMath math="x_1 \neq x_2" />. Then there exist disjoint open sets{" "}
          <InlineMath math="U_1, U_2" /> in <InlineMath math="X" /> such that{" "}
          <InlineMath math="x_1 \in U_1" /> and <InlineMath math="x_2 \in U_2" />. Similarly, pick disjoint{" "}
          <InlineMath math="V_1, V_2" /> in <InlineMath math="Y" /> for <InlineMath math="y_1" />,{" "}
          <InlineMath math="y_2" />. The product sets <InlineMath math="U_1 \times V_1" /> and{" "}
          <InlineMath math="U_2 \times V_2" /> are disjoint and separate{" "}
          <InlineMath math="(x_1, y_1)" /> and <InlineMath math="(x_2, y_2)" />.
        </p>
      </section>

      <hr className="my-6" />
      <section>
        <h2 className="text-2xl font-bold mb-4">6. Visualizing Finite Products</h2>

        <h3 className="text-xl font-semibold mb-2">Example 6.1: Understanding Basis Elements</h3>
        <p className="mb-4">
          Consider the usual topology on <InlineMath math="\mathbb{R}^2" />. Visualize basis elements as open
          rectangles:
        </p>
        <ul className="list-disc pl-6">
          <li>
            Each rectangle <InlineMath math="(a, b) \times (c, d)" /> represents a product of open intervals, forming
            building blocks for the topology.
          </li>
        </ul>
        <hr className="my-6" />

        <h3 className="text-xl font-semibold mt-6 mb-2">Example 6.2: Sorgenfrey Plane</h3>
        <p className="mb-4">
          In the Sorgenfrey plane, basis elements have closed left and bottom edges. Graph these rectangles to see how
          they differ from standard open rectangles.
        </p>
      </section>

      <hr className="my-6" />
      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4">7. A Glimpse at Infinite Products</h2>
        <p className="mb-4">
          While finite products are relatively simple, infinite products introduce complexities, especially with the{" "}
          <strong>product</strong> and <strong>box topologies</strong>. Stay tuned for a deeper dive into these in later
          chapters.
        </p>
      </section>

      <hr className="my-6" />
      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
        <p>
          Finite product topologies provide a powerful framework for building and analyzing new spaces. By understanding
          projection maps and finitely productive properties, we gain insight into how topological properties persist or
          transform under product operations.
        </p>
      </section>
    </div>
  );
};

export default FiniteProducts;
