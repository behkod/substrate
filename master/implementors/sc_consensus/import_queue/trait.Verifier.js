(function() {var implementors = {
"sc_consensus_aura":[["impl&lt;B:&nbsp;<a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>, C, P, CIDP&gt; <a class=\"trait\" href=\"sc_consensus/import_queue/trait.Verifier.html\" title=\"trait sc_consensus::import_queue::Verifier\">Verifier</a>&lt;B&gt; for <a class=\"struct\" href=\"sc_consensus_aura/struct.AuraVerifier.html\" title=\"struct sc_consensus_aura::AuraVerifier\">AuraVerifier</a>&lt;C, P, CIDP, <a class=\"type\" href=\"sp_runtime/traits/type.NumberFor.html\" title=\"type sp_runtime::traits::NumberFor\">NumberFor</a>&lt;B&gt;&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: ProvideRuntimeApi&lt;B&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"sc_client_api/backend/trait.AuxStore.html\" title=\"trait sc_client_api::backend::AuxStore\">AuxStore</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;C::Api: <a class=\"trait\" href=\"sp_block_builder/trait.BlockBuilder.html\" title=\"trait sp_block_builder::BlockBuilder\">BlockBuilderApi</a>&lt;B&gt; + <a class=\"trait\" href=\"sc_consensus_aura/trait.AuraApi.html\" title=\"trait sc_consensus_aura::AuraApi\">AuraApi</a>&lt;B, &lt;P as <a class=\"trait\" href=\"sp_core/crypto/trait.Pair.html\" title=\"trait sp_core::crypto::Pair\">Pair</a>&gt;::<a class=\"associatedtype\" href=\"sp_core/crypto/trait.Pair.html#associatedtype.Public\" title=\"type sp_core::crypto::Pair::Public\">Public</a>&gt; + ApiExt&lt;B&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"sp_core/crypto/trait.Pair.html\" title=\"trait sp_core::crypto::Pair\">Pair</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;P::<a class=\"associatedtype\" href=\"sp_core/crypto/trait.Pair.html#associatedtype.Public\" title=\"type sp_core::crypto::Pair::Public\">Public</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + Decode + Encode + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;P::<a class=\"associatedtype\" href=\"sp_core/crypto/trait.Pair.html#associatedtype.Signature\" title=\"type sp_core::crypto::Pair::Signature\">Signature</a>: Encode + Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;CIDP: CreateInherentDataProviders&lt;B, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;CIDP::InherentDataProviders: <a class=\"trait\" href=\"sc_consensus_slots/trait.InherentDataProviderExt.html\" title=\"trait sc_consensus_slots::InherentDataProviderExt\">InherentDataProviderExt</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</span>"]],
"sc_consensus_babe":[["impl&lt;Block, Client, SelectChain, CIDP&gt; <a class=\"trait\" href=\"sc_consensus/import_queue/trait.Verifier.html\" title=\"trait sc_consensus::import_queue::Verifier\">Verifier</a>&lt;Block&gt; for <a class=\"struct\" href=\"sc_consensus_babe/struct.BabeVerifier.html\" title=\"struct sc_consensus_babe::BabeVerifier\">BabeVerifier</a>&lt;Block, Client, SelectChain, CIDP&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Client: <a class=\"trait\" href=\"sp_blockchain/header_metadata/trait.HeaderMetadata.html\" title=\"trait sp_blockchain::header_metadata::HeaderMetadata\">HeaderMetadata</a>&lt;Block, Error = <a class=\"enum\" href=\"sp_blockchain/error/enum.Error.html\" title=\"enum sp_blockchain::error::Error\">Error</a>&gt; + <a class=\"trait\" href=\"sp_blockchain/backend/trait.HeaderBackend.html\" title=\"trait sp_blockchain::backend::HeaderBackend\">HeaderBackend</a>&lt;Block&gt; + ProvideRuntimeApi&lt;Block&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"sc_client_api/backend/trait.AuxStore.html\" title=\"trait sc_client_api::backend::AuxStore\">AuxStore</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Client::Api: BlockBuilderApi&lt;Block&gt; + <a class=\"trait\" href=\"sc_consensus_babe/trait.BabeApi.html\" title=\"trait sc_consensus_babe::BabeApi\">BabeApi</a>&lt;Block&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;SelectChain: <a class=\"trait\" href=\"sp_consensus/select_chain/trait.SelectChain.html\" title=\"trait sp_consensus::select_chain::SelectChain\">SelectChain</a>&lt;Block&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;CIDP: CreateInherentDataProviders&lt;Block, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;CIDP::InherentDataProviders: <a class=\"trait\" href=\"sc_consensus_slots/trait.InherentDataProviderExt.html\" title=\"trait sc_consensus_slots::InherentDataProviderExt\">InherentDataProviderExt</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</span>"]],
"sc_consensus_manual_seal":[["impl&lt;B, C&gt; <a class=\"trait\" href=\"sc_consensus/import_queue/trait.Verifier.html\" title=\"trait sc_consensus::import_queue::Verifier\">Verifier</a>&lt;B&gt; for <a class=\"struct\" href=\"sc_consensus_manual_seal/consensus/babe/struct.BabeVerifier.html\" title=\"struct sc_consensus_manual_seal::consensus::babe::BabeVerifier\">BabeVerifier</a>&lt;B, C&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"sp_blockchain/backend/trait.HeaderBackend.html\" title=\"trait sp_blockchain::backend::HeaderBackend\">HeaderBackend</a>&lt;B&gt; + <a class=\"trait\" href=\"sp_blockchain/header_metadata/trait.HeaderMetadata.html\" title=\"trait sp_blockchain::header_metadata::HeaderMetadata\">HeaderMetadata</a>&lt;B, Error = <a class=\"enum\" href=\"sp_blockchain/error/enum.Error.html\" title=\"enum sp_blockchain::error::Error\">Error</a>&gt;,</span>"]],
"sc_consensus_pow":[["impl&lt;B:&nbsp;<a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>, Algorithm&gt; <a class=\"trait\" href=\"sc_consensus/import_queue/trait.Verifier.html\" title=\"trait sc_consensus::import_queue::Verifier\">Verifier</a>&lt;B&gt; for <a class=\"struct\" href=\"sc_consensus_pow/struct.PowVerifier.html\" title=\"struct sc_consensus_pow::PowVerifier\">PowVerifier</a>&lt;B, Algorithm&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Algorithm: <a class=\"trait\" href=\"sc_consensus_pow/trait.PowAlgorithm.html\" title=\"trait sc_consensus_pow::PowAlgorithm\">PowAlgorithm</a>&lt;B&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Algorithm::<a class=\"associatedtype\" href=\"sc_consensus_pow/trait.PowAlgorithm.html#associatedtype.Difficulty\" title=\"type sc_consensus_pow::PowAlgorithm::Difficulty\">Difficulty</a>: 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>"]],
"sc_network_test":[["impl&lt;B:&nbsp;<a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>&gt; <a class=\"trait\" href=\"sc_consensus/import_queue/trait.Verifier.html\" title=\"trait sc_consensus::import_queue::Verifier\">Verifier</a>&lt;B&gt; for <a class=\"struct\" href=\"sc_network_test/struct.PassThroughVerifier.html\" title=\"struct sc_network_test::PassThroughVerifier\">PassThroughVerifier</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()