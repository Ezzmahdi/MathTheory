import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const UrysohnMetrizationTheorem = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold ">
        Chapter 15: Urysohn’s Metrization Theorem
      </h1>
      <hr className="my-6" />

      <section className="mt-6">
        <h2 className="text-xl font-semibold ">1. Motivation</h2>
        <p>
          Metric spaces are an essential cornerstone of topology, providing us
          with a rich structure to analyze and manipulate. We've spent
          considerable time exploring their properties, realizing their
          advantages, and appreciating their clarity. Naturally, the idea of
          metrizing a given topological space—i.e., equipping it with a metric
          compatible with its topology—becomes profoundly compelling. The{' '}
          <strong>Urysohn Metrization Theorem</strong> addresses this by
          offering sufficient conditions under which a topological space can
          indeed be metrized.
        </p>
        <p>
          Beyond its immediate utility, the theorem showcases pivotal
          techniques in topology, especially the power of embedding spaces into
          function spaces like <InlineMath math="R^\mathbb{N}_{\text{prod}}" />.
          This embedding approach provides not only the proof but also a deeper
          understanding of metrizable spaces and their interplay with product
          spaces. Let us embark on this journey with the theorem itself.
        </p>
      </section>

      <hr className="my-8" />

      <section>
        <h2 className="text-xl font-semibold ">
          2. Theorem Statement and Preliminary Construction
        </h2>

        <h3 className="text-lg font-medium mt-4">
          2.1 Theorem Statement
        </h3>
        <p>
          <strong>Theorem 2.1 (Urysohn Metrization Theorem):</strong> Every
          second countable <InlineMath math="T_3" /> topological space is
          metrizable.
        </p>
        <p>
          This result reveals a strong connection between second countability
          and metrizability in regular spaces. It is worth noting that second
          countability is indispensable for this theorem. For instance:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>
            The <strong>Sorgenfrey line</strong> is{' '}
            <InlineMath math="T_3" />, separable, but not metrizable.
          </li>
          <li>
            A large product space of discrete topologies (e.g.,{' '}
            <InlineMath
              math="\prod_{i \in I} (\{0, 1\}, \tau_{\text{discrete}})"
            />
            ) can be <InlineMath math="T_3" /> and satisfy the countable chain
            condition (ccc) without being metrizable.
          </li>
        </ul>
        <hr className="my-6" />

        <h3 className="text-lg font-medium  mt-6">
          2.2 Normality and Urysohn’s Lemma
        </h3>
        <p>
          To prove the theorem, we rely on the following foundational results:
        </p>
        <ol className="list-decimal list-inside mt-2">
          <li>
            <strong>Theorem 2.2 (Normality of </strong>
            <InlineMath math="T_3" />
            <strong> Spaces):</strong> Every regular, second countable space is
            normal. This enables us to use Urysohn's Lemma, which is central to
            the construction that follows.
          </li>
          <li>
            <strong>Lemma 2.3:</strong> There exists a countable collection{' '}
            <InlineMath
              math="\{f_n: X \to [0, 1] \mid n \in \mathbb{N} \}"
            />{' '}
            of continuous functions such that for every point{' '}
            <InlineMath math="a \in X" /> and every open set{' '}
            <InlineMath math="U \ni a" />, there exists an{' '}
            <InlineMath math="n" /> such that{' '}
            <InlineMath
              math="f_n(a) > 0 \text{ and } f_n(x) = 0 \text{ for all } x \notin U."
            />
          </li>
        </ol>
        <p>
          The lemma essentially provides a countable "toolbox" of continuous
          functions that help distinguish points and open neighborhoods in{' '}
          <InlineMath math="X" />.
        </p>
      </section>

      <hr className="my-8" />

      <section>
          <h2 className="text-xl font-semibold ">
            3. Proof of the Urysohn Metrization Theorem
          </h2>
          <p>
            We present two proofs, each relying on embedding <InlineMath math="X" /> into a metrizable space:
          </p>

          <h3 className="text-lg font-medium  mt-4">
            3.1 First Proof: Embedding into <InlineMath math="R^\mathbb{N}_{\text{prod}}" />
          </h3>
          <p>
            We construct a continuous injection{" "}
            <InlineMath math="F: X \to R^\mathbb{N}_{\text{prod}}" />, where{" "}
            <InlineMath math="R^\mathbb{N}_{\text{prod}}" /> denotes the product of countably many
            copies of <InlineMath math="R" /> with the product topology.
          </p>
          <hr className="my-6" />

          <h4 className="text-base font-medium mt-3">Steps:</h4>
          <ol className="list-decimal list-inside mt-2 space-y-2">
            <li>
              <strong>Define </strong>
              <InlineMath math="F" />: Let{" "}
              <InlineMath math="\{f_n: X \to [0, 1]\}" /> be the collection from Lemma 2.3. Define{" "}
              <InlineMath math="F(x) = (f_1(x), f_2(x), f_3(x), \dots)" />.
              <ul className="list-disc list-inside mt-1 ml-6">
                <li>Each <InlineMath math="f_n" /> is continuous, so <InlineMath math="F" /> is continuous.</li>
                <li>
                  <InlineMath math="F" /> is injective because if{" "}
                  <InlineMath math="x \neq y" />, we can find an <InlineMath math="f_n" /> such that{" "}
                  <InlineMath math="f_n(x) \neq f_n(y)" />.
                </li>
              </ul>
            </li>
            <li>
              <strong>Topology on </strong>
              <InlineMath math="Y = F(X)" />: The image{" "}
              <InlineMath math="Y \subseteq R^\mathbb{N}_{\text{prod}}" /> inherits its topology from{" "}
              <InlineMath math="R^\mathbb{N}_{\text{prod}}" />, which is metrizable.
            </li>
            <li>
              <strong>Open Map Property:</strong> To show that <InlineMath math="F" /> is a homeomorphism onto{" "}
              <InlineMath math="Y" />, we need to prove that <InlineMath math="F" /> is open. For any open set{" "}
              <InlineMath math="U \subseteq X" /> and <InlineMath math="b \in F(U)" />, consider{" "}
              <InlineMath math="a = F^{-1}(b) \in U" />. Using Lemma 2.3, there exists an{" "}
              <InlineMath math="f_n" /> such that <InlineMath math="f_n(a) > 0" /> and{" "}
              <InlineMath math="f_n(x) = 0" /> for all <InlineMath math="x \notin U" />. Define an open set
              in <InlineMath math="R^\mathbb{N}_{\text{prod}}" />:
              <BlockMath
                math="V = Y \cap \pi_n^{-1}((0, \infty)),"
              />
              where <InlineMath math="\pi_n" /> projects onto the{" "}
              <InlineMath math="n" />-th coordinate. Then <InlineMath math="V" /> is open in{" "}
              <InlineMath math="Y" />, <InlineMath math="b \in V" />, and{" "}
              <InlineMath math="V \subseteq F(U)" />.
            </li>
          </ol>
          <p className="mt-4">
            Thus, <InlineMath math="F" /> is a homeomorphism, and <InlineMath math="X" /> is metrizable.
          </p>
          <hr className="my-6" />

          <h3 className="text-lg font-medium  mt-6">
            3.2 Second Proof: Embedding into the Hilbert Cube <InlineMath math="H" />
          </h3>
          <p>
            Here, we embed <InlineMath math="X" /> into the Hilbert cube{" "}
            <InlineMath math="H = \prod_{n=1}^\infty [0, 1/n]" /> equipped with the{" "}
            <strong>uniform topology</strong> induced by the metric:
          </p>
          <BlockMath math="d_u(x, y) = \sup_{n \in \mathbb{N}} |x_n - y_n|." />
          <hr className="my-6" />

          <h4 className="text-base font-medium mt-3">Steps:</h4>
          <ol className="list-decimal list-inside mt-2 space-y-2">
            <li>
              <strong>Modified Collection of Functions:</strong> Assume the functions{" "}
              <InlineMath math="\{f_n: X \to [0, 1]\}" /> are scaled to map into{" "}
              <InlineMath math="[0, 1/n]" />.
            </li>
            <li>
              <strong>Define </strong>
              <InlineMath math="F" />: Define{" "}
              <InlineMath math="F(x) = (f_1(x), f_2(x), f_3(x), \dots)" /> as before.
              <ul className="list-disc list-inside mt-1 ml-6">
                <li><InlineMath math="F" /> is injective by the same argument as in the first proof.</li>
                <li><InlineMath math="F" /> is open because the uniform topology refines the product topology.</li>
              </ul>
            </li>
            <li>
              <strong>Continuity of </strong>
              <InlineMath math="F" />: Fix <InlineMath math="a \in X" /> and{" "}
              <InlineMath math="\epsilon > 0" />. Choose{" "}
              <InlineMath math="N \in \mathbb{N}" /> such that{" "}
              <InlineMath math="1/N < \epsilon/2" />. For each{" "}
              <InlineMath math="n \leq N" />, the continuity of{" "}
              <InlineMath math="f_n" /> ensures the existence of an open neighborhood{" "}
              <InlineMath math="U_n" /> of <InlineMath math="a" /> where{" "}
              <InlineMath math="|f_n(a) - f_n(x)| < \epsilon/2" />. Let{" "}
              <InlineMath math="U = \bigcap_{n=1}^N U_n" />. For{" "}
              <InlineMath math="x \in U" />, we have:
            </li>
          </ol>
          <BlockMath
            math="|f_n(a) - f_n(x)| < \epsilon/2 \quad \forall n \leq N, \quad \text{and } |f_n(x)| \leq 1/n < \epsilon/2 \quad \forall n > N."
          />
          <p className="mt-4">
            Thus, <InlineMath math="d_u(F(a), F(x)) < \epsilon" />, proving continuity.
          </p>
          <p>
            Since <InlineMath math="F(X) \subseteq H" /> is metrizable, <InlineMath math="X" /> is metrizable.
          </p>
        </section>
        <hr className="my-6" />

        <section>
          <h2 className="text-xl font-semibold  mt-6">
            4. Discussion and Insights
          </h2>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>
              The first proof highlights the utility of product spaces in embedding arbitrary second countable{" "}
              <InlineMath math="T_3" /> spaces into metrizable spaces.
            </li>
            <li>
              The second proof refines this approach by embedding into the compact Hilbert cube, leveraging the
              uniform topology for continuity arguments.
            </li>
          </ul>
          <p className="mt-4">
            These methods demonstrate the richness of topology, intertwining separability, normality, and embedding
            techniques to address metrization. The Urysohn Metrization Theorem underscores the elegance and utility
            of second countable <InlineMath math="T_3" /> spaces in topology.
          </p>      
          <hr className="my-6" />

          <h3 className="text-lg font-medium  mt-6">Conclusion</h3>
          <p className="mt-4">
            We have now proven Urysohn’s Metrization Theorem in two different ways. The first method embedded{" "}
            <InlineMath math="X" /> into the infinite product{" "}
            <InlineMath math="R^\mathbb{N}" />, while the second used the Hilbert cube. In both cases, the space{" "}
            <InlineMath math="X" /> was shown to be metrizable by constructing a continuous injection into a
            metrizable space. This theorem provides a clear and powerful criterion for when a topological space can
            be given a metric, which has significant implications for the study of topology and analysis.
          </p>
        </section>
    </div>
  );
};

export default UrysohnMetrizationTheorem;
