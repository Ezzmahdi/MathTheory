import { InlineMath, BlockMath } from "react-katex";

const StrongerSeparationAxioms = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      {/* Chapter Title */}
      <h1 className="text-3xl font-bold mb-6">Chapter 9: Stronger Separation Axioms</h1>

      <hr className="my-6" />
      <section>
        <h2 className="text-2xl font-bold mb-4">1. Motivation</h2>
        <p className="mb-4">
          In our exploration of topological spaces, we have encountered the fundamental{" "}
          <em>separation axioms</em>—designated as <InlineMath math="T_0" />, <InlineMath math="T_1" />, and{" "}
          <InlineMath math="T_2" />. These axioms help us understand how distinct points in a space can be "separated"
          using open sets. Let's revisit their definitions:
        </p>
        <hr className="my-6" />

        <ol className="list-decimal pl-6 mb-6">
          <li className="mb-4">
            <strong>
              <InlineMath math="T_0" /> (Kolmogorov)
            </strong>
            : A space is <InlineMath math="T_0" /> if, for any two distinct points{" "}
            <InlineMath math="x" /> and <InlineMath math="y" />, there exists an open set that contains one of these
            points but not the other.
          </li>
          <li className="mb-4">
            <strong>
              <InlineMath math="T_1" /> (Frechet)
            </strong>
            : A space is <InlineMath math="T_1" /> if, for every pair of distinct points{" "}
            <InlineMath math="x" /> and <InlineMath math="y" />, there exist open sets{" "}
            <InlineMath math="U" /> and <InlineMath math="V" /> such that:
            <ul className="list-disc pl-6">
              <li>
                <InlineMath math="x \in U" />, <InlineMath math="y \notin U" />,
              </li>
              <li>
                <InlineMath math="y \in V" />, <InlineMath math="x \notin V" />.
              </li>
            </ul>
            Equivalently, all singletons <InlineMath math="\{x\}" /> in a <InlineMath math="T_1" /> space are closed
            sets.
          </li>
          <li className="mb-4">
            <strong>
              <InlineMath math="T_2" /> (Hausdorff)
            </strong>
            : A space is <InlineMath math="T_2" /> if, for every pair of distinct points{" "}
            <InlineMath math="x" /> and <InlineMath math="y" />, there exist disjoint open sets{" "}
            <InlineMath math="U" /> and <InlineMath math="V" /> such that:
            <ul className="list-disc pl-6">
              <li>
                <InlineMath math="x \in U" />, <InlineMath math="y \in V" />.
              </li>
            </ul>
          </li>
        </ol>
      </section>

      <hr className="my-6" />
      <section>
        <h2 className="text-2xl font-bold mb-4">2. Why Study Stronger Axioms?</h2>
        <p className="mb-4">
          While the <InlineMath math="T_0" />, <InlineMath math="T_1" />, and <InlineMath math="T_2" /> axioms focus on
          separating <em>points</em> in a space, we often encounter situations where we need more robust separation
          criteria. For instance, in many applications, it is essential to separate a point from a closed set, or even
          separate two distinct closed sets.
        </p>
        <p>
          This chapter introduces two stronger separation axioms, <strong>regularity</strong> and{" "}
          <strong>normality</strong>, denoted as <InlineMath math="T_3" /> and <InlineMath math="T_4" />, respectively.
          These axioms extend our ability to distinguish between different types of subsets within topological spaces.
        </p>
      </section>

      <hr className="my-6" />
        <h2 className="text-2xl font-bold mb-4">3. Regularity and the <InlineMath math="T_3" /> Axiom</h2>

        <h3 className="text-xl font-semibold mb-2">3.1 Definition of Regularity</h3>
        <p className="mb-4">
          A topological space <InlineMath math="(X, T)" /> is <strong>regular</strong> if, for any point{" "}
          <InlineMath math="x \in X" /> and any closed set <InlineMath math="C" /> in <InlineMath math="X" /> that does
          not contain <InlineMath math="x" />, there exist disjoint open sets <InlineMath math="U" /> and{" "}
          <InlineMath math="V" /> such that:
        </p>
        <ul className="list-disc pl-6">
          <li>
            <InlineMath math="x \in U" />,
          </li>
          <li>
            <InlineMath math="C \subset V" />.
          </li>
        </ul>
        <p className="mb-6">
          In simple terms, this means we can "separate" a point from any closed set that does not contain it.
        </p>

        <hr className="my-6" />
        <h3 className="text-xl font-semibold mb-2">3.2 Examples of Regular Spaces</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <strong>Discrete Space</strong>: Every discrete topological space is regular because every subset is open
            (and hence also closed).
          </li>
          <li>
            <strong>Euclidean Space</strong>: In <InlineMath math="\mathbb{R}^n" /> with the usual topology, open balls
            can separate points from closed sets.
          </li>
          <li>
            <strong>Sorgenfrey Line</strong>: The Sorgenfrey topology on <InlineMath math="\mathbb{R}" /> (generated by
            half-open intervals <InlineMath math="[a, b)" />) is regular.
          </li>
          <li>
            <strong>Indiscrete Space</strong>: Even an indiscrete space (where the only open sets are{" "}
            <InlineMath math="\emptyset" /> and <InlineMath math="X" />) is technically regular.
          </li>
        </ul>

        <hr className="my-6" />
        <h3 className="text-xl font-bold mb-4">3.3 What is <InlineMath math="T_3" />?</h3>
        <p>
          A topological space is said to be <strong><InlineMath math="T_3" /></strong> if it is both:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li><InlineMath math="T_1" /> (all singletons are closed)</li>
          <li>Regular</li>
        </ul>
        <p>
          Thus, <InlineMath math="T_3" /> spaces combine the ability to separate points (from <InlineMath math="T_1" />) 
          with the ability to separate points from closed sets.
        </p>
        <hr className="my-6" />

        <h4 className="text-xl font-semibold mt-6 mb-2">3.4 Key Properties of <InlineMath math="T_3" /> Spaces</h4>
        <ul className="list-disc list-inside ml-4">
          <li>
            <strong>Hereditary Property</strong>: If <InlineMath math="X" /> is a <InlineMath math="T_3" /> space, 
            any subspace of <InlineMath math="X" /> is also <InlineMath math="T_3" />.
          </li>
          <li>
            <strong>Product Property</strong>: Finite products of <InlineMath math="T_3" /> spaces are <InlineMath math="T_3" />.
          </li>
        </ul>
        <hr className="my-6" />

        <h4 className="text-xl font-semibold mt-6 mb-2">3.5 Important Results and Proofs</h4>
        <ol className="list-decimal list-inside ml-4">
          <li>
            <strong>Regularity is a Topological Invariant</strong>: If two spaces are homeomorphic and one is regular, the other must be regular as well.
          </li>
          <li>
            <strong>Characterization of Regularity</strong>: A space <InlineMath math="(X, T)" /> is regular if, 
            for any point <InlineMath math="x \in X" /> and any open set <InlineMath math="U" /> containing <InlineMath math="x" />, 
            there exists an open set <InlineMath math="V" /> such that:
            <BlockMath math="x \in V \quad \text{and} \quad \overline{V} \subset U" />
            (Here, <InlineMath math="\overline{V}" /> denotes the closure of <InlineMath math="V" />.)
          </li>
        </ol>

        <hr className="my-6" />

        <h3 className="text-2xl font-bold mb-4">4. Normality and the <InlineMath math="T_4" /> Axiom</h3>

        <h4 className="text-xl font-semibold mt-6 mb-2">4.1 Definition of Normality</h4>
        <p>
          A topological space <InlineMath math="(X, T)" /> is <strong>normal</strong> if, for any two disjoint closed sets 
          <InlineMath math="A" /> and <InlineMath math="B" /> in <InlineMath math="X" />, there exist disjoint open sets 
          <InlineMath math="U" /> and <InlineMath math="V" /> such that:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li><InlineMath math="A \subset U" /></li>
          <li><InlineMath math="B \subset V" /></li>
        </ul>
        <p>This means normal spaces can "separate" disjoint closed sets with disjoint open sets.</p>
        <hr className="my-6" />

        <h4 className="text-xl font-semibold mt-6 mb-2">4.2 What is <InlineMath math="T_4" />?</h4>
        <p>
          A topological space is said to be <strong><InlineMath math="T_4" /></strong> if it is both:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li><InlineMath math="T_1" /></li>
          <li>Normal</li>
        </ul>
        <hr className="my-6" />

        <h4 className="text-xl font-semibold mt-6 mb-2">4.3 Examples of Normal Spaces</h4>
        <ul className="list-disc list-inside ml-4">
          <li>
            <strong>Euclidean Space <InlineMath math="\mathbb{R}^n" /></strong>: Euclidean spaces are normal. For any two disjoint closed sets, 
            it is always possible to find disjoint open sets that separate them.
          </li>
          <li>
            <strong>Discrete Space</strong>: Every discrete space is trivially normal since every subset is both open and closed.
          </li>
        </ul>
        <hr className="my-6" />

        <h4 className="text-xl font-semibold mt-6 mb-2">4.4 Key Properties of <InlineMath math="T_4" /> Spaces</h4>
        <ul className="list-disc list-inside ml-4">
          <li>
            <strong>Hereditary Property</strong>: Normality is not hereditary. A subspace of a normal space may not be normal.
          </li>
          <li>
            <strong>Product Property</strong>: Unlike <InlineMath math="T_3" />, the product of normal spaces is not necessarily normal.
          </li>
        </ul>

        <hr className="my-6" />

        <h3 className="text-2xl font-bold mb-4">5. Relationship Between Axioms</h3>
        <p>
          Here is a quick summary of the relationships among the separation axioms:
        </p>
        <BlockMath math="T_4 \Rightarrow T_3 \Rightarrow T_2 \Rightarrow T_1 \Rightarrow T_0" />
        <p>Each axiom strengthens the ability to distinguish between points or sets. The converse of these implications does not generally hold.</p>

        <hr className="my-6" />

        <h3 className="text-2xl font-bold mb-4">6. Practical Importance</h3>
        <p>
          Why do we care about stronger separation axioms? These axioms help ensure that topological spaces have desirable properties for analysis. For example:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>
            Regular and normal spaces allow for powerful results like Urysohn’s Lemma and the Tietze Extension Theorem.
          </li>
          <li>They play a crucial role in functional analysis and the study of continuous functions.</li>
        </ul>

        <hr className="my-6" />

        <h3 className="text-2xl font-bold mb-4">7. Conclusion</h3>
        <p>
          The study of separation axioms reveals a hierarchy of increasingly restrictive properties in topological spaces. 
          Understanding these axioms not only deepens our appreciation of topological structure but also provides the 
          foundation for further exploration in areas such as analysis and geometry.
        </p>
    </div>
  );
};

export default StrongerSeparationAxioms;
