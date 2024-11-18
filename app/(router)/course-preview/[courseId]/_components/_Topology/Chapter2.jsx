import React from 'react';
import { InlineMath } from 'react-katex';

const BasesTopologies = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Chapter 2: Bases of Topologies</h1>
      <hr className="my-6" />

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Motivation</h2>
        <p className="mb-4">
          In the previous chapter, we explored different topologies by explicitly listing all their open sets.
          While this works for simple cases, it quickly becomes impractical as topologies grow more complex.
          Imagine trying to list every possible open set in the usual topology on the real numbers 
          <InlineMath math="\mathbb{R}" />—a task that would involve an infinite collection of sets.
          Fortunately, there's a more efficient way to describe topologies using a special collection of sets called a <em>basis</em>.
        </p>
        <p className="mb-4">
          Let’s start by revisiting the <em>usual topology</em> on <InlineMath math="\mathbb{R}" />:
        </p>
        <div className="p-4 bg-gray-100 rounded mb-4">
          <InlineMath math="T_{\text{usual}} = \{ U \subseteq \mathbb{R} : \forall x \in U, \exists \delta > 0 \text{ such that } (x - \delta, x + \delta) \subseteq U \}" />
        </div>
        <p className="mb-4">
          Here, every open set <InlineMath math="U" /> can be described as a union of open intervals. Once we know that the intervals 
          <InlineMath math="(a, b)" /> are open, we automatically get all other open sets by forming unions of these intervals.
        </p>
        <p className="mb-4">
          Now consider the <em>discrete topology</em> on a set <InlineMath math="X" />, where every subset of <InlineMath math="X" /> is open.
          It turns out we don’t need to list all subsets to describe this topology. Instead, we can focus on the single-element subsets 
          called <em>singletons</em>, <InlineMath math="\{x\}" />. Any subset <InlineMath math="U \subseteq X" /> can be written as a union 
          of singletons, which makes singletons sufficient to describe the topology.
        </p>
        <p>
          These special collections, which allow us to generate the entire topology through unions, are called <em>bases</em>. 
          Understanding bases will help us describe and work with topologies more efficiently.
        </p>
      </section>
      <hr className="my-6" />

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Bases of Topologies</h2>
        
        <h3 className="text-lg font-medium mb-2">2.1. What is a Basis?</h3>
        <p className="mb-4">
          A basis is a collection of sets that can be used to construct a topology. Instead of listing every open set, 
          we list a smaller set of "building blocks" and generate the topology from them.
        </p>
        <hr className="my-6" />

        <div className="mb-4 p-4 bg-gray-100 rounded">
          <strong>Definition 2.1.</strong> Let <InlineMath math="X" /> be a set. A collection of sets 
          <InlineMath math="B \subseteq \mathcal{P}(X)" /> (the power set of <InlineMath math="X" />) is called a <em>basis</em> on 
          <InlineMath math="X" /> if it satisfies two conditions:
          <ol className="list-decimal list-inside mt-2">
            <li>
              <strong>Coverage</strong>: <InlineMath math="B" /> covers <InlineMath math="X" />, meaning every point in 
              <InlineMath math="X" /> belongs to at least one set in <InlineMath math="B" />:
              <InlineMath math="\forall x \in X, \exists B \in B \text{ such that } x \in B." />
            </li>
            <li>
              <strong>Intersection Property</strong>: For any two sets <InlineMath math="B_1, B_2 \in B" /> and any point 
              <InlineMath math="x \in B_1 \cap B_2" />, there exists a set <InlineMath math="B_3 \in B" /> such that:
              <InlineMath math="x \in B_3 \subseteq B_1 \cap B_2." />
            </li>
          </ol>
        </div>
        
        <p className="mb-4">
          <strong>Why are these conditions important?</strong> 
          The <em>coverage</em> condition ensures that every point in <InlineMath math="X" /> is "covered" by at least one basis set, 
          guaranteeing that the resulting topology will include all points in <InlineMath math="X" />. The <em>intersection property</em> 
          ensures that the resulting topology will be closed under intersections, a key requirement for topologies.
        </p>
      </section>
      <hr className="my-6" />

      <section className="mb-6">
        <h3 className="text-lg font-medium mb-2">2.2. Generating a Topology from a Basis</h3>
        <p className="mb-4">
          Once we have a basis, we can use it to define a topology.
        </p>
        <hr className="my-6" />

        <div className="mb-4 p-4 bg-gray-100 rounded">
          <strong>Definition 2.2.</strong> Given a basis <InlineMath math="B" />, the topology <em>generated by</em> 
          <InlineMath math="B" />, denoted <InlineMath math="T_B" />, is the collection of all sets that can be written 
          as unions of sets from <InlineMath math="B" />, including the empty set:
          <InlineMath math="T_B = \left\{ \bigcup C : C \subseteq B \right\} \cup \{\emptyset\}." />
        </div>

        <p className="mb-4">
          <strong>Key Idea</strong>: If you start with a basis <InlineMath math="B" />, you automatically get all the open sets in 
          <InlineMath math="T_B" /> by considering every possible union of sets in <InlineMath math="B" />.
        </p>
      </section>
      <hr className="my-6" />

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Examples of Bases</h2>

        <div className="mb-4">
          <p className="font-medium">1. <strong>Discrete Topology</strong>:</p>
          <p className="mb-2">
            Let <InlineMath math="X" /> be a set, and let <InlineMath math="B = \{\{x\} : x \in X\}" /> be the collection of all singletons. 
            This <InlineMath math="B" /> satisfies the basis conditions:
          </p>
          <ul className="list-disc list-inside mb-2">
            <li>It covers <InlineMath math="X" /> because every point <InlineMath math="x \in X" /> belongs to its singleton <InlineMath math="\{x\}" />.</li>
            <li>The intersection of any two singletons is either empty or another singleton, satisfying the intersection property.</li>
          </ul>
          <p>The topology <InlineMath math="T_B" /> generated by this basis is the <em>discrete topology</em>, where every subset of <InlineMath math="X" /> is open.</p>
        </div>
        <hr className="my-6" />

        <div className="mb-4">
          <p className="font-medium">2. <strong>Usual Topology on <InlineMath math="\mathbb{R}" /></strong>:</p>
          <p className="mb-2">
            The collection <InlineMath math="B = \{(a, b) : a < b\}" /> of open intervals forms a basis for the usual topology on 
            <InlineMath math="\mathbb{R}" />.
          </p>
          <ul className="list-disc list-inside mb-2">
            <li>Any point <InlineMath math="x \in \mathbb{R}" /> lies in some interval <InlineMath math="(x - \delta, x + \delta)" />, satisfying coverage.</li>
            <li>The intersection of two intervals <InlineMath math="(a, b)" /> and <InlineMath math="(c, d)" /> is another interval, written as 
              <InlineMath math="(\max(a, c), \min(b, d))" />, satisfying the intersection property.
            </li>
          </ul>
          <p>The topology <InlineMath math="T_B" /> generated here is exactly the usual topology.</p>
        </div>
        <hr className="my-6" />

        <div className="mb-4">
          <p className="font-medium">3. <strong>Open Rays on <InlineMath math="\mathbb{R}" /></strong>:</p>
          <p className="mb-2">
            Consider <InlineMath math="B = \{(a, \infty) : a \in \mathbb{R}\}" />. This also forms a basis:
          </p>
          <ul className="list-disc list-inside mb-2">
            <li>Every point <InlineMath math="x \in \mathbb{R}" /> lies in some ray <InlineMath math="(x - 1, \infty)" />, ensuring coverage.</li>
            <li>Intersections of open rays are open rays, satisfying the intersection property.</li>
          </ul>
          <p>This basis generates a topology different from the usual one, known as the <em>lower limit topology</em>.</p>
        </div>
      </section>
      <hr className="my-6" />

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Proof: <InlineMath math="T_B" /> is a Topology</h2>
        <p className="mb-4">
          Let’s prove that <InlineMath math="T_B" />, as defined earlier, satisfies the three properties of a topology:
        </p>
        <ol className="list-decimal list-inside mb-4">
          <li className="mb-2">
            <strong>Contains <InlineMath math="\emptyset" /> and <InlineMath math="X" /></strong>: 
            By definition, <InlineMath math="\emptyset \in T_B" />. Also, since <InlineMath math="B" /> covers <InlineMath math="X" />, 
            we have <InlineMath math="X = \bigcup B" /> for some <InlineMath math="B \subseteq T_B" />, so <InlineMath math="X \in T_B" />.
          </li>
          <li className="mb-2">
            <strong>Closed under arbitrary unions</strong>: 
            Let <InlineMath math="\{U_\alpha : \alpha \in I\}" /> be any collection of sets in <InlineMath math="T_B" />. 
            Each <InlineMath math="U_\alpha" /> can be written as a union of sets from <InlineMath math="B" />, say 
            <InlineMath math="U_\alpha = \bigcup C_\alpha" /> for some <InlineMath math="C_\alpha \subseteq B" />. Then:
            <InlineMath math="\bigcup_{\alpha \in I} U_\alpha = \bigcup_{\alpha \in I} \bigcup C_\alpha = \bigcup \left( \bigcup_{\alpha \in I} C_\alpha \right)" />.
            Since <InlineMath math="\bigcup_{\alpha \in I} C_\alpha \subseteq B" />, this union is in <InlineMath math="T_B" />.
          </li>
          <li className="mb-2">
            <strong>Closed under finite intersections</strong>: 
            Let <InlineMath math="U, V \in T_B" /> with <InlineMath math="U = \bigcup A" /> and <InlineMath math="V = \bigcup C" /> for 
            <InlineMath math="A, C \subseteq B" />. Their intersection is:
            <InlineMath math="U \cap V = \bigcup_{A \in A, C \in C} (A \cap C)" />.
            By the intersection property of <InlineMath math="B" />, each <InlineMath math="A \cap C" /> is a union of sets from 
            <InlineMath math="B" />, so <InlineMath math="U \cap V \in T_B" />.
          </li>
        </ol>
      </section>
      <hr className="my-6" />

      <section>
        <h2 className="text-xl font-semibold mb-2">5. Conclusion</h2>
        <p className="mb-4">
          The concept of a basis simplifies how we define and work with topologies. By focusing on a smaller collection of sets, 
          we can describe complex topologies more efficiently. Whether it’s the familiar topology on <InlineMath math="\mathbb{R}" /> 
          or something more exotic, understanding bases helps us unlock the structure of topological spaces with ease.
        </p>
      </section>
    </div>
  );
};

export default BasesTopologies;
