namespace $ {
	
	export class $hyoo_crowds_auth extends $mol_crypto_key_private {
		
		@ $mol_mem
		static current() {
			$mol_wire_solid()
			let key = String( $mol_state_local.value( '$hyoo_crowds_auth' ) ?? '' )
			if( key ) return $hyoo_crowds_auth.from( key )
			const auth = $mol_wire_sync( this as typeof $hyoo_crowds_auth ).generate()
			$mol_state_local.value( '$hyoo_crowds_auth', auth.toString() )
			return auth
		}
		
		static async generate() {
			for( let i = 0; i < 4096; ++i ) {
				const auth = await super.generate()
				if( auth.uint8(0) !== $hyoo_crowds_unit_kind.pass ) continue
				return this.from( auth )
			}
			$mol_fail( new Error( `Too long key generation` ) )
		}
		
		lord() {
			return this.uint64( 8 )
		}
		
		peer() {
			return this.uint48( 8 )
		}
		
		@ $mol_mem_key
		secret_mutual( pub: string ) {
			return $mol_wire_sync( $mol_crypto_secret ).derive( this.toString(), pub.toString() )
		}
		
	}
	
}