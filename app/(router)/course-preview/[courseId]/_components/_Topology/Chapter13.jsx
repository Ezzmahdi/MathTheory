import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const UrysohnsLemma = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">
        Chapter 13: Urysohn's Lemma
      </h1>
      <hr className="my-6" />

      <section>
        <h2 className="text-2xl font-semibold mb-3 ">
          Motivation
        </h2>
        <p className="mb-4">
          Urysohn’s Lemma, sometimes referred to as Urysohn’s Theorem, is a
          cornerstone of topology. Its significance lies in its ability to
          bridge normality, a separation property of topological spaces, and
          continuous functions, which are fundamental to analysis and topology.
          The lemma will later serve as a critical component in proving{' '}
          <strong>Urysohn’s Metrization Theorem</strong>, a result that
          characterizes metrizable spaces—spaces where a metric governs their
          topology.
        </p>
        <hr className="my-6" />

        <h3 className="text-xl font-medium mb-2 ">
          Why Urysohn’s Lemma Matters
        </h3>
        <ul className="list-disc pl-6 mb-4 ">
          <li>
            <strong>Characterizing Normality:</strong> The lemma offers an
            alternative characterization of normal spaces by demonstrating that
            the ability to separate disjoint closed sets using continuous
            functions is equivalent to their separation by open sets. This
            connection simplifies and unifies concepts in topology.
          </li>
          <li>
            <strong>Practical Implications:</strong> By establishing that
            normality allows for separating closed sets with continuous
            functions, Urysohn's Lemma opens the door to constructing functions
            for practical applications, such as embeddings and metrizations.
          </li>
          <li>
            <strong>Conceptual Depth:</strong> This theorem is an example of a
            "hard" result in topology, requiring ingenuity in constructing
            continuous functions. The proof introduces methods that will be
            reused in other advanced results.
          </li>
        </ul>
      </section>

      <hr className="my-6" />

      <section>
        <h2 className="text-2xl font-semibold mb-3 ">
          Preliminaries
        </h2>

        <h3 className="text-xl font-medium mb-2 ">Definitions</h3>
        <ol className="list-decimal pl-6 mb-4 ">
          <li>
            <strong>Normal Spaces:</strong> A topological space{' '}
            <InlineMath math="(X, T)" /> is <strong>normal</strong> if, for
            every pair of disjoint, nonempty closed subsets{' '}
            <InlineMath math="C" /> and <InlineMath math="D" /> of{' '}
            <InlineMath math="X" />, there exist disjoint open sets{' '}
            <InlineMath math="U" /> and <InlineMath math="V" /> such that{' '}
            <InlineMath math="C \subseteq U" /> and{' '}
            <InlineMath math="D \subseteq V" />.
          </li>
          <li>
            <strong>Alternative Characterization of Normality:</strong> A
            topological space <InlineMath math="(X, T)" /> is normal if and only
            if, for every open set <InlineMath math="U" /> and closed subset{' '}
            <InlineMath math="C \subseteq U" />, there exists an open set{' '}
            <InlineMath math="V" /> such that{' '}
            <InlineMath math="C \subseteq V \subseteq \overline{V} \subseteq U" />
            .
          </li>
        </ol>
        <hr className="my-6" />

        <h3 className="text-xl font-medium mb-2 ">
          Mathematical Tools
        </h3>
        <ol className="list-decimal pl-6 mb-4 ">
          <li>
            <strong>Countability of </strong>
            <InlineMath math="\mathbb{Q}" />: The rationals{' '}
            <InlineMath math="\mathbb{Q}" /> are countable, enabling systematic
            indexing for construction processes in the proof.
          </li>
          <li>
            <strong>Completeness Axiom of Real Numbers:</strong> Every nonempty
            subset of <InlineMath math="\mathbb{R}" /> that is bounded below has
            a greatest lower bound (infimum). This property ensures that
            functions defined via infima are well-defined.
          </li>
        </ol>
      </section>

      <hr className="my-6" />

      <h3 className="text-2xl font-bold mb-6">
        Theorem and Its Proof Strategy
      </h3>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 ">
          Statement of Urysohn's Lemma
        </h2>
        <p className="mb-4 ">
          A topological space <InlineMath math="(X, T)" /> is normal if and only if, for every
          pair of disjoint, nonempty closed subsets{' '}
          <InlineMath math="C, D \subseteq X" />, there exists a continuous
          function <InlineMath math="f: X \to [0, 1]" /> such that:
        </p>
        <ul className="list-disc pl-6 ">
          <li>
            <InlineMath math="f(x) = 0" /> for all <InlineMath math="x \in C" />,
          </li>
          <li>
            <InlineMath math="f(x) = 1" /> for all <InlineMath math="x \in D" />.
          </li>
        </ul>
      </section>
      <hr className="my-6" />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 ">
          Proof Outline
        </h2>
        <ol className="list-decimal pl-6  space-y-2">
          <li>
            <strong>Easy Direction (</strong>
            <InlineMath math="\implies" />
            <strong>):</strong> If <InlineMath math="(X, T)" /> is normal,
            construct a continuous function separating{' '}
            <InlineMath math="C" /> and <InlineMath math="D" /> using normality
            and continuity properties.
          </li>
          <li>
            <strong>Hard Direction (</strong>
            <InlineMath math="\impliedby" />
            <strong>):</strong> Assuming <InlineMath math="(X, T)" /> is normal,
            construct such a function <InlineMath math="f: X \to [0, 1]" /> by:
            <ul className="list-disc pl-6 mt-2">
              <li>
                Defining a nested collection of open sets indexed by{' '}
                <InlineMath math="\mathbb{Q} \cap [0, 1]" />,
              </li>
              <li>
                Using the completeness of <InlineMath math="\mathbb{R}" /> to
                define <InlineMath math="f(x)" /> as the infimum of certain
                rational indices,
              </li>
              <li>
                Verifying that <InlineMath math="f" /> is continuous and
                satisfies the required conditions.
              </li>
            </ul>
          </li>
        </ol>
      </section>
      <hr className="my-6" />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 ">
          The Proof
        </h2>

        <h3 className="text-xl font-medium mb-3 ">
          1. Easy Direction (
          <InlineMath math="\implies" />)
        </h3>
        <p className="mb-4 ">
          Suppose <InlineMath math="(X, T)" /> is normal, and{' '}
          <InlineMath math="C, D \subseteq X" /> are disjoint closed sets. By
          normality:
        </p>
        <ul className="list-disc pl-6 mb-4 ">
          <li>
            There exist disjoint open sets <InlineMath math="U" /> and{' '}
            <InlineMath math="V" /> such that{' '}
            <InlineMath math="C \subseteq U" /> and{' '}
            <InlineMath math="D \subseteq V" />.
          </li>
        </ul>
        <p className="mb-4 ">
          Define <InlineMath math="f: X \to [0, 1]" /> as:
        </p>
        <BlockMath
          math={`
f(x) =
\\begin{cases}
0, & x \\in C, \\\\
1, & x \\in D, \\\\
\\text{some interpolated value,} & x \\in X \\setminus (C \\cup D).
\\end{cases}
          `}
        />
        <p className="">
          This interpolation is possible due to continuity, ensuring{' '}
          <InlineMath math="f" /> is well-defined and separates{' '}
          <InlineMath math="C" /> and <InlineMath math="D" />.
        </p>
      </section>
      <hr className="my-6" />

      <section className="mb-8">
        <h3 className="text-xl font-medium mb-3 ">
          2. Hard Direction (
          <InlineMath math="\impliedby" />)
        </h3>
        <p className="mb-4 ">
          Assume <InlineMath math="(X, T)" /> is normal. The construction of
          <InlineMath math="f" /> involves:
        </p>
        <hr className="my-6" />

        <h4 className="text-lg font-medium mb-2 ">
          Construction of Open Sets
        </h4>
        <ul className="list-disc pl-6 mb-4 ">
          <li>
            Enumerate <InlineMath math="\mathbb{Q} \cap [0, 1]" /> as{' '}
            <InlineMath math="\{p_n : n \in \mathbb{N}\}" />, with{' '}
            <InlineMath math="p_0 = 0" /> and <InlineMath math="p_1 = 1" />.
          </li>
          <li>
            Inductively define a collection of open sets{' '}
            <InlineMath math="\{U_p : p \in \mathbb{Q} \cap [0, 1]\}" />
            satisfying:
          </li>
        </ul>
        <BlockMath math="p < q \implies U_p \subseteq U_q." />
        <hr className="my-6" />

        <h4 className="text-lg font-medium mb-2 ">
          Definition of the Function
        </h4>
        <p className="mb-4 ">
          For <InlineMath math="x \in X" />, let:
        </p>
        <BlockMath
          math={`
Q(x) = \\{p \\in \\mathbb{Q} \\cap [0, 1] : x \\in U_p\\}.
          `}
        />
        <p className="mb-4 ">
          Define <InlineMath math="f(x)" /> as the infimum:
        </p>
        <BlockMath
          math={`
f(x) = \\inf Q(x).
          `}
        />
      </section>
      <hr className="my-6" />

      <section>
        <h2 className="text-2xl font-semibold mb-4 ">
          Conclusion
        </h2>
        <p className="">
          Urysohn’s Lemma illustrates the power of normal spaces to produce
          continuous functions with specific properties. Its proof demonstrates
          a creative interplay between separation properties and the
          completeness of real numbers, paving the way for deeper results in
          topology.
        </p>
      </section>
    </div>
  );
};

export default UrysohnsLemma;
