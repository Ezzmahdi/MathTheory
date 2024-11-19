import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Continuity = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mt-6">Chapter 6: Continuity and Homeomorphisms</h1>
      <hr className="my-6" />

      <section>
        <h2 className="text-xl font-semibold mt-6 mb-4">1. Motivation</h2>
        <p>
          In earlier chapters, we touched on basic topological properties such as the T-axioms (
          <InlineMath math="T_0, T_1, T_2" />
          ) and countability properties (separability, ccc, first and second countability). These
          properties form the foundation of point-set topology. However, the true heart of topology
          lies in understanding how these properties behave under various operations—such as
          continuous mappings, subspaces, products, and more.
        </p>
        <p>
          In this chapter, we focus on how topological properties transfer between spaces through
          functions. Central to this discussion is the concept of <em>continuous functions</em>.
          These functions ensure that some aspects of the topological structure of the domain are
          preserved in the codomain. Furthermore, we will explore functions that go beyond mere
          continuity—<em>homeomorphisms</em>—which preserve the entire topological structure,
          rendering two spaces topologically identical.
        </p>
      </section>
      <hr className="my-6" />

      <section>
        <h2 className="text-xl font-semibold mt-6">2. Continuous Functions</h2>

        <h3 className="text-lg font-semibold mt-6">Definition</h3>
        <p>
          Let <InlineMath math="(X, T)" /> and <InlineMath math="(Y, U)" /> be topological spaces,
          and let <InlineMath math="f : X \to Y" /> be a function. The function{' '}
          <InlineMath math="f" /> is said to be <strong>continuous</strong> if for every open set{' '}
          <InlineMath math="V \in U" />, the preimage <InlineMath math="f^{-1}(V) \in T" />. In
          simpler terms, <em>the preimage of every open set under</em>{' '}
          <InlineMath math="f" /> <em>is open in</em> <InlineMath math="X" />.
        </p>
        <hr className="my-6" />

        <h3 className="text-lg font-semibold mt-6">Examples</h3>
        <ul className="list-disc pl-5">
          <li>
            <strong>Polynomial Function</strong>: Let{' '}
            <InlineMath math="f: \mathbb{R} \to \mathbb{R}" /> be defined by{' '}
            <InlineMath math="f(x) = x^3" />. Using the standard definition of continuity from
            calculus, one can show that this function is continuous in the topological sense.
          </li>
          <li>
            <strong>Distance Function</strong>: Fix a point{' '}
            <InlineMath math="a \in \mathbb{R}^n" /> and define{' '}
            <InlineMath math="f : \mathbb{R}^n \to \mathbb{R}" /> by{' '}
            <InlineMath math="f(x) = d(x, a)" />, where <InlineMath math="d" /> is the Euclidean
            distance. This function is continuous.
          </li>
          <li>
            <strong>Projection Function</strong>: The function{' '}
            <InlineMath math="\pi_1 : \mathbb{R}^2 \to \mathbb{R}" /> given by{' '}
            <InlineMath math="\pi_1(x, y) = x" /> is continuous. Projection functions play a
            critical role in product topology.
          </li>
          <li>
            <strong>Discrete and Indiscrete Spaces</strong>:
            <ul className="list-disc pl-5">
              <li>
                Any function from a discrete space to any other topological space is continuous.
              </li>
              <li>
                Any function from any topological space to an indiscrete space is continuous.
              </li>
            </ul>
          </li>
          <li>
            <strong>Constant Functions</strong>: Any constant function{' '}
            <InlineMath math="f: X \to Y" /> is continuous, regardless of the topologies on{' '}
            <InlineMath math="X" /> and <InlineMath math="Y" />.
          </li>
          <li>
            <strong>Compositions</strong>: If <InlineMath math="f : X \to Y" /> and{' '}
            <InlineMath math="g : Y \to Z" /> are continuous, then the composition{' '}
            <InlineMath math="g \circ f : X \to Z" /> is continuous.
          </li>
          <li>
            <strong>Identity Function</strong>: Let <InlineMath math="T_1" /> and{' '}
            <InlineMath math="T_2" /> be topologies on the same set <InlineMath math="X" />. The
            identity function <InlineMath math="\text{id} : (X, T_1) \to (X, T_2)" /> is continuous
            if and only if <InlineMath math="T_1" /> refines <InlineMath math="T_2" />.
          </li>
        </ul>
      </section>
      <hr className="my-6" />

      <section>
        <h3 className="text-lg font-semibold mt-6">Proposition: Continuity via Refinement</h3>
        <p>
          The identity function <InlineMath math="\text{id} : (X, T_1) \to (X, T_2)" /> is
          continuous if and only if <InlineMath math="T_1" /> is finer than{' '}
          <InlineMath math="T_2" />.
        </p>
      </section>
      <hr className="my-6" />

      <h1 className="text-xl font-bold mb-4 mt-4">3. Equivalent Conditions for Continuity</h1>

      <h2 className="text-lg font-semibold mt-6">Proposition</h2>
      <p>
        Let <InlineMath math="f : X \to Y" /> be a function between topological spaces{' '}
        <InlineMath math="(X, T)" /> and <InlineMath math="(Y, U)" />. The following statements
        are equivalent:
      </p>
      <ol className="list-decimal list-inside">
        <li>
          <InlineMath math="f" /> is continuous.
        </li>
        <li>
          For every closed set <InlineMath math="C \subseteq Y" />,{' '}
          <InlineMath math="f^{-1}(C)" /> is closed in <InlineMath math="X" />.
        </li>
        <li>
          For every <InlineMath math="x \in X" />, <InlineMath math="f" /> is continuous at{' '}
          <InlineMath math="x" />.
        </li>
        <li>
          For every subset <InlineMath math="A \subseteq X" />,{' '}
          <InlineMath math="f(\overline{A}) \subseteq \overline{f(A)}" />.
        </li>
      </ol>
      <hr className="my-6" />

      <h3 className="text-lg font-semibold mt-4">Proof Outline</h3>
      <p>
        We will prove the equivalences in the order{' '}
        <InlineMath math="(3) \Rightarrow (1) \Rightarrow (4) \Rightarrow (2) \Rightarrow (3)" />.
      </p>
      <ol className="list-decimal list-inside">
        <li className="mt-2">
          <InlineMath math="(3) \Rightarrow (1):" /> If <InlineMath math="f" /> is continuous at
          every point, then for any open set <InlineMath math="V \in U" />, the preimage{' '}
          <InlineMath math="f^{-1}(V)" /> is open, satisfying the definition of continuity.
        </li>
        <li className="mt-2">
          <InlineMath math="(1) \Rightarrow (4):" /> Continuity ensures that{' '}
          <InlineMath math="f" /> maps closed sets in <InlineMath math="X" /> to closed sets in{' '}
          <InlineMath math="Y" />, which implies that closures are respected.
        </li>
        <li className="mt-2">
          <InlineMath math="(4) \Rightarrow (2):" /> Given a closed set{' '}
          <InlineMath math="C \subseteq Y" />, the preimage <InlineMath math="f^{-1}(C)" /> must be
          closed in <InlineMath math="X" /> due to the preservation of closures.
        </li>
        <li className="mt-2">
          <InlineMath math="(2) \Rightarrow (3):" /> If preimages of closed sets are closed, then
          the function is continuous at every point.
        </li>
      </ol>
      <hr className="my-6" />
  
      <h2 className="text-xl font-semibold mt-6">Homeomorphisms</h2>
      <h3 className="text-lg font-semibold mt-4">Definition</h3>
      <p>
        A function <InlineMath math="f : X \to Y" /> is a homeomorphism if:
      </p>
      <ol className="list-decimal list-inside">
        <li>
          <InlineMath math="f" /> is a bijection.
        </li>
        <li>
          <InlineMath math="f" /> is continuous.
        </li>
        <li>
          The inverse function <InlineMath math="f^{-1}" /> is continuous.
        </li>
      </ol>
      <p>
        Homeomorphisms preserve all topological properties, meaning that{' '}
        <InlineMath math="X" /> and <InlineMath math="Y" /> are topologically indistinguishable.
      </p>
      <hr className="my-6" />

      <h3 className="text-lg font-semibold mt-4">Examples</h3>
      <ul className="list-disc list-inside">
        <li>
          <strong>Identity Function:</strong> For any topological space{' '}
          <InlineMath math="(X, T)" />, the identity function{' '}
          <InlineMath math="\text{id} : X \to X" /> is a homeomorphism.
        </li>
        <li>
          <strong>Open Interval and Real Line:</strong> The function{' '}
          <InlineMath math="f : (0, 1) \to \mathbb{R}" /> defined by{' '}
          <InlineMath math="f(x) = \tan(\pi x - \pi/2)" /> is a homeomorphism between{' '}
          <InlineMath math="(0, 1)" /> and <InlineMath math="\mathbb{R}" />.
        </li>
      </ul>
      <hr className="my-6" />
 
      <h2 className="text-xl font-semibold mt-6">Open and Closed Functions</h2>
      <h3 className="text-lg font-semibold mt-4">Definition</h3>
      <p>
        A function <InlineMath math="f : X \to Y" /> is <strong>open</strong> if it maps open sets
        in <InlineMath math="X" /> to open sets in <InlineMath math="Y" />. A function{' '}
        <InlineMath math="f : X \to Y" /> is <strong>closed</strong> if it maps closed sets in{' '}
        <InlineMath math="X" /> to closed sets in <InlineMath math="Y" />.
      </p>
      <p>
        <strong>Note:</strong> A function can be continuous without being open or closed.
      </p>
      <hr className="my-6" />
 
      <h2 className="text-xl font-semibold mt-6">Exercises</h2>
      <ol className="list-decimal list-inside">
        <li>Prove that the composition of two homeomorphisms is a homeomorphism.</li>
        <li>Verify that the identity function is continuous under refinement conditions.</li>
        <li>Construct a continuous but non-open function between two spaces.</li>
      </ol>
      <hr className="my-6" />

      <h2 className="text-xl font-semibold mt-6">Conclusion</h2>
      <p>
        In this chapter, we have developed a deep understanding of continuous functions and
        homeomorphisms. These tools allow us to compare and analyze topological spaces
        systematically, unlocking the full potential of topology's structural insights.
      </p>
    </div>
  );
};

export default Continuity;
